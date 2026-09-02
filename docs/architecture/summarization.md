# Summarization and automation

### Optional: automated summarization

```toml
# Use your existing Claude Code, Codex, OpenCode, or Pi subscription (recommended)
[summarization]
engine = "agent"
agent_command = "claude"  # or "codex" / "opencode" / "pi"

# Or use Mistral API (requires MISTRAL_API_KEY)
[summarization]
engine = "mistral"
mistral_model = "mistral-large-latest"

# Or use a free local LLM
[summarization]
engine = "ollama"
ollama_model = "llama3.2"

# Or use any OpenAI-compatible gateway/local server.
# Desktop users can paste cloud gateway keys in Settings; Minutes stores them
# in macOS Keychain and hydrates its own runtime secret without rewriting this
# shared config. CLI users can set any env var and name it below. Local servers
# can leave it blank.
[summarization]
engine = "openai-compatible"
openai_compatible_base_url = "https://openrouter.ai/api/v1"
openai_compatible_model = "openai/gpt-4o-mini"
openai_compatible_api_key_env = "OPENROUTER_API_KEY" # leave blank for local servers
```

### File-backed automation primitives

Minutes can emit small automation artifacts that are easy to schedule with
`launchd`, `cron`, or any external runner.

```bash
minutes automate weekly-summary --json
minutes automate proactive-context --json
```

Each run writes:

- a markdown artifact under `~/.minutes/automation-runs/`
- a matching JSON run record beside it

This is intentionally simple: explicit files, explicit output paths, and no
hidden scheduler subsystem.

### Codex epic runner

When you want Codex to keep draining a `bd` epic instead of stopping after one
child bead, use the repo-local epic runner:

```bash
node scripts/codex_epic_runner.mjs <epic-id> -- --full-auto
```

What it does:

- uses `bd` as the source of truth for epic ancestry and ready work
- picks the next ready non-epic descendant bead under the target epic
- claims that bead, runs `codex exec` against it, then checks whether the bead was actually closed
- continues only after a real close; pauses on blocked/needs-human outcomes instead of guessing

Dry-run the order first:

```bash
node scripts/codex_epic_runner.mjs <epic-id> --dry-run
```

If you install a Taskmaster-style Codex wrapper later, use it as the per-bead
engine without changing the epic logic:

```bash
node scripts/codex_epic_runner.mjs <epic-id> --taskmaster -- --sandbox danger-full-access -a never
```

This is intentionally separate from the Claude plugin hooks. The Minutes plugin
hooks are Claude-specific today; the Codex epic runner is a repo-local workflow
layer on top of `bd` and `codex exec`.

### Optional: knowledge base integration

Maintain a living knowledge base from your conversations — person profiles, decision history, and a chronological log that compounds over time. Inspired by [Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

```toml
[knowledge]
enabled = true
path = "~/wiki"        # or your Obsidian vault, PARA system, etc.
adapter = "wiki"       # "wiki" (flat markdown), "para" (atomic facts), "obsidian" (wiki + [[links]])
engine = "none"        # "none" = structured YAML only (safest), "agent" = LLM extraction
min_confidence = "strong"
```

After each policy-authorized normal meeting, structured facts (decisions,
action items, commitments) can flow into person profiles automatically.
Restricted meetings are skipped. Every emitted fact carries provenance back to
its source meeting.

```bash
minutes ingest --dry-run --all   # Preview what would be extracted
minutes ingest --all              # Backfill existing meetings
minutes ingest ~/meetings/call.md # Process a single meeting
```

Three output formats:
- **Wiki** — `people/{slug}.md` with facts grouped by category
- **PARA** — `areas/people/{slug}/items.json` with atomic facts (id, status, supersededBy)
- **Obsidian** — Wiki format with `[[wikilinks]]` for cross-references

Safety: default `engine = "none"` extracts only from parsed YAML frontmatter. No LLM call, zero hallucination risk. Confidence thresholds filter speculative facts. Corrupt data is backed up, never silently destroyed.
