# Architecture

## How it works

```text
Audio → Transcribe → Diarize → Summarize → Structured Markdown → Policy-safe search
         (local)     (local)     (LLM)       (decisions,            (bounded live-source
        whisper.cpp  pyannote-rs Claude/       action items,          profiles and topics)
        (retained    (native)    Ollama/       people, entities)
        Parakeet → Whisper)      Mistral/OpenAI
```

Audio processing runs locally. Cloud LLM summarization is optional. A bounded,
process-private projection answers relationship questions from authorized files.

```
minutes/
├── archive/              Separate least-privilege Archive Census Tauri app
├── crates/archive-core/  Capability-bound archive inventory primitives
├── crates/core/          53 Rust modules — the engine (shared by all interfaces)
├── crates/cli/           CLI binary — 58 commands (recording, search, health, storage, templates, workflows)
├── crates/whisper-guard/ Anti-hallucination toolkit (VAD gating, dedup, noise trimming)
├── crates/reader/        Lightweight read-only meeting parser (no audio deps)
├── crates/assets/        Bundled assets (demo.wav)
├── crates/sdk/           TypeScript SDK — `npm install minutes-sdk` (query meetings programmatically)
├── crates/mcp/           MCP server — 34 tools + 11 resources + interactive dashboard
│   └── ui/               MCP App dashboard (vanilla TS → single-file HTML)
├── tauri/                Menu bar app — system tray, recording UI, singleton AI Assistant
└── .claude/plugins/minutes/   Claude Code plugin — 23 skills + 1 agent + 2 hooks
```

The meeting interfaces share `minutes-core`. The separate Archive target
depends only on `minutes-archive-core`; it does not inherit Minutes' recording,
assistant, shell, updater, or broad desktop capability surface.

### Building your own agent on Minutes

Minutes is designed as infrastructure for AI agents. Files are the durable substrate; MCP is the active interface; live transcript JSONL and the local event log are the real-time paths. The MCP server is the primary integration surface today:

- **Read meetings**: `list_meetings`, `search_meetings`, `get_meeting` return structured JSON
- **Track people**: `get_person_profile` builds cross-meeting profiles with topics, open commitments
- **Monitor consistency**: `consistency_report` flags conflicting decisions and stale commitments
- **Record + process**: `start_recording`, `stop_recording`, `process_audio` for pipeline control
- **Live coaching**: `start_live_transcript`, `read_live_transcript` for transcript access; `start_copilot`, `copilot_status`, `read_copilot_nudges`, and `stop_copilot` control and observe the independent real-time copilot
- **Local event stream**: `minutes events --follow --since-seq N` tails newline-delimited events, including finalized live utterances, for agents that want a durable cursor
- **Voice profiles**: `list_voices` for inspecting speaker identities; `confirm_speaker` remains a compatibility name that directs identity changes to the Minutes app or a human CLI session
- **Resources**: Stable URIs (`minutes://meetings/recent`, `minutes://actions/open`, `minutes://live/copilot`) for agent context injection and live copilot observation

Any agent framework that speaks MCP can use Minutes as its conversation memory layer — the agent handles the intelligence, Minutes handles the recall.

**TypeScript SDK** — for direct programmatic access without MCP:

```bash
npm install minutes-sdk
```

```typescript
import { listMeetings, searchMeetings, parseFrontmatter } from "minutes-sdk";

const meetings = await listMeetings("~/meetings", 20);
const results = await searchMeetings("~/meetings", "pricing");
```

**Built with:** Rust, [whisper.cpp](https://github.com/ggerganov/whisper.cpp) (transcription), [pyannote-rs](https://github.com/pdeljanov/pyannote-rs) (speaker diarization), [Silero VAD](https://github.com/snakers4/silero-vad) (voice activity detection), [hound](https://github.com/ruuda/hound) (bounded WAV decoding), [cpal](https://github.com/RustAudio/cpal) (audio capture), [Tauri v2](https://v2.tauri.app/) (desktop app), [ureq](https://github.com/algesten/ureq) (HTTP), and [ffmpeg](https://ffmpeg.org/) (bounded compressed-audio decoding).
