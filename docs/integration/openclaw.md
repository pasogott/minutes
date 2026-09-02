# OpenClaw support

Minutes works with [OpenClaw](https://github.com/openclaw/openclaw) in two
ways: as an MCP server, which is the recommended path and works today, and
through the portable `.agents/skills/minutes/` skill tree that OpenClaw reads
natively.

## What is wired

- `minutes-mcp` runs as a local stdio MCP server.
- OpenClaw can expose only the read and recall tools useful to a headless agent.
- Minutes' portable skills use the same Agent Skills format OpenClaw supports.

## MCP server

Register Minutes from the command line:

```bash
openclaw mcp add minutes \
  --command npx \
  --arg -y --arg minutes-mcp \
  --cwd ~
openclaw mcp doctor minutes --probe
```

Or add a filtered server directly to `~/.openclaw/openclaw.json`:

```json5
{
  mcp: {
    servers: {
      minutes: {
        command: "npx",
        args: ["-y", "minutes-mcp"],
        transport: "stdio",
        enabled: true,
        connectionTimeoutMs: 5000,
        requestTimeoutMs: 20000,
        toolFilter: {
          include: [
            "search_meetings",
            "get_meeting",
            "list_meetings",
            "read_live_transcript",
            "track_commitments",
            "get_person_profile",
            "consistency_report",
            "research_topic",
            "relationship_map",
          ],
        },
      },
    },
  },
}
```

The filter keeps capture, dictation, processing, annotation, and speaker tools
away from a headless agent. Those tools only make sense on the machine and in
the workflow where Minutes is actively capturing audio.

## Skills

Point OpenClaw at the existing skill tree instead of copying it:

```json5
{
  skills: {
    load: {
      extraDirs: ["/path/to/minutes/.agents/skills/minutes"],
    },
  },
}
```

Alternatively, link that directory at `~/.agents/skills/minutes`. OpenClaw also
discovers `.agents/skills` within a workspace automatically.

If an agent has an explicit skill allowlist in `agents.defaults.skills` or
`agents.entries.<id>.skills`, add the Minutes skills there. An explicit list
replaces the defaults rather than extending them.

Use `minutes-mcp-recall` for guidance on choosing a read or recall tool. It uses
bare MCP names such as `search_meetings` for OpenClaw.

## Memory-provider plugin

Minutes does not currently ship an OpenClaw memory-provider plugin. The MCP
server remains available as ordinary agent tools and can coexist with the
memory provider already selected in OpenClaw. OpenClaw's Active Memory lane
does not automatically call arbitrary MCP servers.
