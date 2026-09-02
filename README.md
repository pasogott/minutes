# minutes

[![GitHub stars](https://img.shields.io/github/stars/silverstein/minutes?style=social)](https://github.com/silverstein/minutes)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![crates.io](https://img.shields.io/crates/v/minutes-cli.svg)](https://crates.io/crates/minutes-cli)
[![npm](https://img.shields.io/npm/v/minutes-mcp.svg)](https://www.npmjs.com/package/minutes-mcp)

[useminutes.app](https://useminutes.app)

Open-source, local-first Granola / Otter alternative that Claude Code, Codex, Cursor, and any MCP client can query. Records meetings, calls, and voice memos, transcribes on-device, writes markdown you own to `~/meetings/`. Nothing is uploaded.

**Your AI remembers the conversations you authorize — and no one can take them from you.**

<p align="center">
  <img src="docs/assets/demo.gif" alt="minutes demo — record, dictate, phone sync, AI recall" width="750">
</p>

## Install

```bash
brew install --cask silverstein/tap/minutes
brew install silverstein/tap/minutes
cargo install minutes-cli
npx minutes-mcp  # or: claude mcp add minutes -- npx -y minutes-mcp
```

If Homebrew reports an untrusted tap, run `brew trust silverstein/tap` once.

## Ask your agent

Add Minutes to your agent, capture a conversation, then ask about it:

```bash
claude mcp add minutes -- npx -y minutes-mcp
minutes process demo.wav
```

> What did I promise Sarah?

A direct MCP call uses the same local meeting files:

```text
search_meetings({"query":"what did I promise Sarah?"})
```

Record live with `minutes record`, then stop and transcribe with `minutes stop`.
Setup: [Codex, Gemini CLI, and Claude Desktop](docs/integration/clients.md#any-mcp-client-claude-code-codex-opencode-gemini-cli-claude-desktop-or-your-own-agent),
[Cursor](docs/integration/cursor-agent.md),
[OpenCode](docs/integration/clients.md#opencode-cli),
[Pi](docs/integration/pi-agent.md),
[Mistral Vibe](docs/integration/clients.md#mistral-vibe), and
[Cowork or Dispatch](docs/integration/clients.md#cowork--dispatch).

### Works with

Claude Code · Codex · Cursor · OpenCode · Pi · Gemini CLI · Claude Desktop ·
Mistral Vibe · Cowork · Dispatch · Obsidian · Logseq · any MCP client

## How it compares

| Feature | Granola | Otter.ai | Hyprnote | minutes |
|---|---|---|---|---|
| Local transcription | No (cloud) | No (cloud) | Yes | Yes |
| Open source | No | No | GPL-3.0 | MIT |
| Free | Freemium | Freemium | Free | Free |
| Agent surface | Hosted MCP | Hosted integrations | Local app | Files + 34 MCP tools |
| Cross-meeting intelligence | Cloud chat | Cloud chat | No | Policy-safe search |
| Consent provenance | No | No | No | In every file |
| Dictation mode | No | No | No | Yes |
| Voice memos | No | No | No | iPhone pipeline |
| People memory | No | No | No | Bounded profiles |
| Data ownership | Their servers | Their servers | Local | Local |
| Data format | Cloud DB | Cloud DB | Local files | Markdown + YAML |
| Agent-agnostic | No | No | Partially | Yes |
| Speaker labels | — | — | — | Free, on-device |
| Your files | — | — | Local files | Markdown on disk |

Competitor cells follow public product documentation spot-checked in August 2026.

## Who it's for

Agent-first users treat Minutes as the capture layer of a local second brain.
They search meetings through Claude Code, Cursor, Codex, OpenCode, MCP, or the
CLI, then fold useful context into a vault or wiki they own.

Desktop notetaker users record and read results in the app. They value reliable
setup, clear processing and recovery, Recall, documents, Coach, and summary
quality. See the full [persona notes](docs/personas.md).

## Surfaces

| Surface | What it provides | Docs |
|---|---|---|
| Desktop app | Menu bar capture, Recall, documents, and Coach. | [Install](docs/install.md#desktop-app) |
| CLI (58 commands) | Local recording, processing, search, import, and automation. | [Commands](docs/features.md) |
| MCP server (34 tools) | Local meeting tools and resources for any MCP client. | [MCP reference](docs/integration/agent-integrations.md) |
| Claude Code plugin (23 skills) | Prep, capture, live help, debrief, and memory workflows. | [Client setup](docs/integration/clients.md#claude-code-plugin) |
| SDK | TypeScript access to meeting files without MCP. | [Agent architecture](docs/architecture/README.md#building-your-own-agent-on-minutes) |

## Output format

Meetings are plain markdown with structured YAML frontmatter:

```yaml
---
title: Q2 Pricing Discussion with Alex
type: meeting
date: 2026-03-17T14:00:00
duration: 42m
context: Discuss Q2 pricing
action_items:
  - assignee: mat
    task: Send pricing doc
    due: Friday
    status: open
decisions:
  - text: Test monthly billing with 10 advisors
---
```

See the [frontmatter schema](docs/architecture/frontmatter-schema.md). Files work
with [Obsidian](https://obsidian.md), grep, and any markdown tool.

## Privacy & consent

- Transcription and speaker processing run on-device. Audio stays on your machine.
- Sensitive meetings save typed markers without audio and default to restricted.
- Consent reminders, acknowledgement, and provenance help you disclose recording.
- Text leaves the machine only when you send authorized context to a cloud agent or summarizer.

See the [security documentation](docs/security/) and
[consent enforcement design](docs/architecture/consent-enforcement.md).

## Docs

- [Features and commands](docs/features.md)
- [Install, setup, updating, and troubleshooting](docs/install.md)
- [Agent and MCP client integrations](docs/integration/clients.md)
- [Phone voice memo pipeline](docs/phone-voice-memo-pipeline.md)
- [Summarization and automation](docs/architecture/summarization.md)
- [Configuration](docs/configuration.md)
- [Architecture and agent development](docs/architecture/README.md)
- [Switching from Granola and importing archives](docs/switching-from-granola.md)
- [Frontmatter schema](docs/architecture/frontmatter-schema.md)
- [Security](docs/security/)
- [Personas](docs/personas.md)
- [MCP tools](https://useminutes.app/docs/mcp/tools)
- [Error reference](https://useminutes.app/docs/errors)
- [Agent index](https://useminutes.app/llms.txt)
- [Full agent index](https://useminutes.app/llms-full.txt)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

MIT — Built by [Mat Silverstein](https://github.com/silverstein), founder of
[X1 Wealth](https://x1wealth.com).

## Star History

[![Star History Chart](https://star-history.dera.page/svg?repos=silverstein/minutes&type=Date)](https://star-history.dera.page/#silverstein/minutes&Date)
