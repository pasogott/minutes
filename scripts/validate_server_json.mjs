#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const serverPath = path.join(root, "server.json");

function describe(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

function matchesType(value, type) {
  switch (type) {
    case "array":
      return Array.isArray(value);
    case "integer":
      return Number.isInteger(value);
    case "null":
      return value === null;
    case "number":
      return typeof value === "number" && Number.isFinite(value);
    case "object":
      return value !== null && typeof value === "object" && !Array.isArray(value);
    default:
      return typeof value === type;
  }
}

function sameJson(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function resolveReference(schemaRoot, reference) {
  if (!reference.startsWith("#/")) {
    throw new Error(`unsupported external schema reference ${JSON.stringify(reference)}`);
  }
  return reference
    .slice(2)
    .split("/")
    .map((part) => part.replaceAll("~1", "/").replaceAll("~0", "~"))
    .reduce((value, part) => value?.[part], schemaRoot);
}

function validate(schema, value, instancePath, schemaRoot) {
  if (schema === true) return [];
  if (schema === false) return [`${instancePath}: rejected by schema`];
  if (!schema || typeof schema !== "object") {
    return [`${instancePath}: invalid schema node`];
  }

  if (schema.$ref) {
    const referenced = resolveReference(schemaRoot, schema.$ref);
    if (referenced === undefined) {
      return [`${instancePath}: unresolved schema reference ${schema.$ref}`];
    }
    return validate(referenced, value, instancePath, schemaRoot);
  }

  const errors = [];
  if (schema.allOf) {
    for (const child of schema.allOf) {
      errors.push(...validate(child, value, instancePath, schemaRoot));
    }
  }
  if (schema.anyOf) {
    const alternatives = schema.anyOf.map((child) =>
      validate(child, value, instancePath, schemaRoot),
    );
    if (!alternatives.some((candidate) => candidate.length === 0)) {
      errors.push(`${instancePath}: does not match any allowed schema`);
    }
  }
  if (schema.not && validate(schema.not, value, instancePath, schemaRoot).length === 0) {
    errors.push(`${instancePath}: matches a forbidden schema`);
  }

  if (schema.type && !matchesType(value, schema.type)) {
    errors.push(`${instancePath}: expected ${schema.type}, found ${describe(value)}`);
    return errors;
  }
  if (schema.const !== undefined && !sameJson(value, schema.const)) {
    errors.push(`${instancePath}: expected ${JSON.stringify(schema.const)}`);
  }
  if (schema.enum && !schema.enum.some((candidate) => sameJson(value, candidate))) {
    errors.push(`${instancePath}: must be one of ${schema.enum.map(JSON.stringify).join(", ")}`);
  }

  if (typeof value === "string") {
    if (schema.minLength !== undefined && value.length < schema.minLength) {
      errors.push(`${instancePath}: must contain at least ${schema.minLength} characters`);
    }
    if (schema.maxLength !== undefined && value.length > schema.maxLength) {
      errors.push(`${instancePath}: must contain at most ${schema.maxLength} characters`);
    }
    if (schema.pattern && !new RegExp(schema.pattern, "u").test(value)) {
      errors.push(`${instancePath}: does not match ${schema.pattern}`);
    }
    if (schema.format === "uri") {
      try {
        const uri = new URL(value);
        if (!uri.protocol) throw new Error("missing scheme");
      } catch {
        errors.push(`${instancePath}: must be an absolute URI`);
      }
    }
  }

  if (Array.isArray(value) && schema.items) {
    value.forEach((item, index) => {
      errors.push(...validate(schema.items, item, `${instancePath}[${index}]`, schemaRoot));
    });
  }

  if (value !== null && typeof value === "object" && !Array.isArray(value)) {
    for (const required of schema.required ?? []) {
      if (!Object.hasOwn(value, required)) {
        errors.push(`${instancePath}.${required}: required property is missing`);
      }
    }
    for (const [key, child] of Object.entries(schema.properties ?? {})) {
      if (Object.hasOwn(value, key)) {
        errors.push(...validate(child, value[key], `${instancePath}.${key}`, schemaRoot));
      }
    }
    for (const [key, child] of Object.entries(value)) {
      if (Object.hasOwn(schema.properties ?? {}, key)) continue;
      if (schema.additionalProperties === false) {
        errors.push(`${instancePath}.${key}: additional property is not allowed`);
      } else if (schema.additionalProperties && typeof schema.additionalProperties === "object") {
        errors.push(
          ...validate(schema.additionalProperties, child, `${instancePath}.${key}`, schemaRoot),
        );
      }
    }
  }

  return errors;
}

try {
  const server = JSON.parse(await readFile(serverPath, "utf8"));
  const schemaUrl = server.$schema;
  if (
    typeof schemaUrl !== "string" ||
    !/^https:\/\/static\.modelcontextprotocol\.io\/schemas\/\d{4}-\d{2}-\d{2}\/server\.schema\.json$/.test(
      schemaUrl,
    )
  ) {
    throw new Error("server.json must reference a dated official MCP Registry schema URL");
  }

  const response = await fetch(schemaUrl);
  if (!response.ok) {
    throw new Error(`failed to fetch ${schemaUrl}: HTTP ${response.status}`);
  }
  const schema = await response.json();
  if (schema.$id !== schemaUrl) {
    throw new Error(`schema $id ${JSON.stringify(schema.$id)} does not match ${schemaUrl}`);
  }

  const errors = validate(schema, server, "$", schema);
  if (errors.length > 0) {
    throw new Error(`server.json does not match ${schemaUrl}:\n${errors.map((error) => `- ${error}`).join("\n")}`);
  }
  console.log(`server.json is valid against ${schemaUrl}`);
} catch (error) {
  console.error(`validate_server_json: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}
