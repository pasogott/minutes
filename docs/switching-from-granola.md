# Switching from Granola?

Import your meeting history into Minutes' conversation memory. Once imported,
normal meetings become searchable context for AI agents and surface action items,
decision patterns, and bounded relationship intelligence across months of
conversations. Restricted meetings stay excluded from agent results by default.

```bash
minutes import granola --dry-run    # Preview what will be imported
minutes import granola              # Import all meetings to ~/meetings/
```

Reads from `~/.granola-archivist/output/`. Meetings are converted to Minutes' markdown format with YAML frontmatter. Duplicates are skipped automatically. All your data stays local — no cloud, no $18/mo.

> **Populating the export directory:** `~/.granola-archivist/output/` has to be filled by a separate Granola export tool first. Recent Granola versions encrypt their local cache, which can break exporters that scrape it. If `minutes import granola` finds nothing, use the API-based [granola-to-minutes](https://github.com/calvindotsg/granola-to-minutes) route below instead (it reads Granola's API and writes straight to `~/meetings/`).

### Want transcripts and AI summaries?

[granola-to-minutes](https://github.com/calvindotsg/granola-to-minutes) exports richer data using [granola-cli](https://github.com/magarcia/granola-cli), a community-built CLI tool (not affiliated with Granola Labs) that accesses Granola's internal API:

| | `minutes import granola` | `granola-to-minutes` |
|---|---|---|
| **Data source** | Local export (`~/.granola-archivist/output/`) | Granola internal API via [granola-cli](https://github.com/magarcia/granola-cli) |
| **Notes & transcript** | ✓ | ✓ |
| **AI-enhanced summaries** | — | ✓ |
| **Action items & decisions** | — | ✓ (extracted via Claude) |
| **Speaker attribution** | — | ✓ (`speaker_map` in frontmatter) |
| **Setup** | Export from Granola desktop app | `npm install -g granola-to-minutes` |
| **Works on free tier** | ✓ | ✓ |
| **API stability** | N/A (local files) | Internal API — may change without notice |

```bash
npx granola-to-minutes export    # Export to ~/meetings/
```

## Importing an existing text archive

Have years of transcripts and notes from other tools? Import them all at once:

```bash
minutes import text --dir /path/to/archive --dry-run    # Preview
minutes import text --dir /path/to/archive              # Import
```

Recursively imports `.md`, `.markdown`, and `.txt` files, inferring titles and dates from frontmatter, headings, filenames, or file timestamps. Conversion is local and deterministic, with no AI or network calls, and re-runs skip anything already imported. When it finishes, run `minutes ingest --all` to build the knowledge base over the imported archive.
