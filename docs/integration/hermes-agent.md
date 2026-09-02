# Hermes-agent support

Minutes works with [Hermes-agent](https://github.com/NousResearch/hermes-agent)
as a local MCP server and through the portable `.agents/skills/minutes/` skill
tree that Hermes-agent reads natively.

## What is wired

- `minutes-mcp` runs as a local stdio MCP server.
- Hermes-agent exposes Minutes tools with an `mcp_minutes_` prefix.
- Minutes' portable skills use the same Agent Skills format Hermes-agent
  supports.

## MCP server

Add Minutes to `~/.hermes/config.yaml`:

```yaml
mcp_servers:
  minutes:
    command: "npx"
    args: ["-y", "minutes-mcp"]
    enabled: true
    timeout: 20000
```

Inside an active Hermes-agent session, reload MCP servers without restarting:

```text
/reload-mcp
```

Hermes-agent prefixes MCP tool names to avoid collisions. Minutes'
`search_meetings` tool therefore appears as
`mcp_minutes_search_meetings`. Skills and prompts written specifically for
Hermes-agent should use the prefixed names.

## Skills

Hermes-agent discovers `.agents/skills/` at a project root. Running it from a
Minutes checkout therefore makes `.agents/skills/minutes/*` available without
another generated skill tree.

To reuse the skills from another project, add the Minutes skill directory to
`~/.hermes/config.yaml`:

```yaml
skills:
  external_dirs:
    - /path/to/minutes/.agents/skills/minutes
```

Hermes-agent also supports installing skills from external sources. Check the
installed CLI's syntax before using a repository path:

```bash
hermes skills install --help
```

Use `minutes-mcp-recall` for guidance on choosing a read or recall tool. Apply
Hermes-agent's `mcp_minutes_` prefix to the tool name selected by the skill.

## Memory-provider plugin

Minutes does not currently ship a Hermes-agent memory-provider plugin. MCP
registration does not replace the single provider selected under
`memory.provider`, so Minutes recall can coexist with that provider.
