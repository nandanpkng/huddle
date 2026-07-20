# Huddle

**A proactive meeting agent that prepares a decision-ready brief before each meeting and turns the conversation into owned follow-through afterward.**

Track: Work & Productivity — OpenAI Build Week 2026

---

## Demo Video

- **Watch on YouTube:** https://youtu.be/jhjFkTeh3e0

---

## The Problem

Knowledge workers spend over 20 hours per week in meetings, and most arrive unprepared. Pre-meeting preparation requires manually searching Slack threads, past notes, CRM records, and email chains. Post-meeting, action items get lost in transcript logs; nobody owns them or tracks them to completion. Existing meeting assistants capture recordings but remain passive—they don't draft tickets, schedule follow-up briefs, or surface past open decisions.

---

## The Solution

Huddle is a proactive meeting companion that lives in your calendar and tools:
1. **30 minutes before any meeting**, Huddle reads calendar attendees, relevant Slack threads (past 7 days), and Notion docs to generate a 1-page pre-meeting brief with attendee context, open decisions, and suggested talking points.
2. **Post-meeting**, Huddle ingests transcripts to extract grounded action items with assigned owners, due dates, and exact source quotes.
3. **Follow-Through Actions:** Drafts Slack summaries, Linear tickets, and follow-up emails for human review.

```text
Calendar event -> rank Slack + Notion context -> GPT-5.6 decision-ready brief
    -> opt-in meeting transcript -> GPT-5.6 extracts owners and dates
    -> draft email / task / Slack follow-up -> open decision carried into next brief
```

---

## How Codex Was Used

Huddle was built 100% from scratch using OpenAI Codex as the primary software engineer.

### Codex Prompts Executed in Order:
1. `"Scaffold an Express application for calendar event watching and meeting brief generation."`
2. `"Build a cross-tool context ranking service that ingests Slack messages, Notion docs, and prior meeting decisions."`
3. `"Implement a GPT-5.6 prompt pipeline to produce a 1-page pre-meeting brief with talking points."`
4. `"Create an action-item parser that processes meeting transcripts, assigns owners/due dates, and retains exact source quotes."`
5. `"Build a responsive dark-mode frontend workspace displaying meeting briefs, attendee context, and interactive action items."`
6. `"Write unit tests validating brief generation, context ranking, and transcript action extraction."`

---

## GPT-5.6 Integration

GPT-5.6 powers two frontier-model reasoning tasks:
1. **Multi-Source Context Synthesis:** Fuses Slack, email, Notion, and CRM data to extract the 5 most relevant background context items per meeting.
2. **Grounded Action Extraction:** Extracts action items with inferred owners and due dates, strictly backed by transcript source quotes.

### Code Snippet (`src/services/brief-engine.js`):
```javascript
const brief = await openai.chat.completions.create({
  model: "gpt-5.6",
  messages: [
    { role: "system", content: PRE_MEETING_BRIEF_SYSTEM },
    { role: "user", content: JSON.stringify({ event, slackThreads, notionDocs, priorDecisions }) }
  ],
  response_format: { type: "json_object" }
});
```

---

## 9-Day Build Log

- **Day 1 (Jul 13):** Calendar event schema & meeting watcher scaffold (`src/services/demo-data.js`).
- **Day 2 (Jul 14):** Implemented Slack & Notion context ingestors and ranking engine.
- **Day 3 (Jul 15):** Built GPT-5.6 pre-meeting brief generation pipeline (`src/services/brief-engine.js`).
- **Day 4 (Jul 16):** Added transcript action item extractor with quote grounding.
- **Day 5 (Jul 17):** Implemented draft follow-through generators (Slack post, email draft, Linear ticket).
- **Day 6 (Jul 18):** Designed responsive web UI (`src/public/index.html`, `src/public/app.js`).
- **Day 7 (Jul 19):** Created automated test suite (`tests/huddle.test.js`) for deterministic local testing.
- **Day 8 (Jul 20):** Refined UI animations, dark mode theme, and decision tracking logic.
- **Day 9 (Jul 21):** Final end-to-end verification, demo video preparation, and documentation polish.

---

## Try It / Run Locally

### Prerequisites & Supported Platforms
- **Supported Platforms:** macOS, Linux, Windows
- **Runtime:** Node.js 20+
- **Credentials:** None required! The application includes a self-contained, offline-testable demo mode with pre-loaded Calendar events, Slack discussions, Notion notes, and transcript logs.

### Quick Start

```bash
# 1. Clone repository
git clone https://github.com/nandanpkng/huddle.git
cd huddle

# 2. Start local server (zero npm dependencies required)
pnpm start   # or npm start / node src/server.js

# 3. Open in browser
# http://localhost:3001
```

### Self-Contained Judge Walkthrough
1. Navigate to `http://localhost:3001` in your web browser.
2. Inspect the **30-Minute Pre-Meeting Brief** generated from Slack threads, Notion docs, and attendee history.
3. Click **Process demo transcript** to trigger transcript action extraction.
4. Review extracted action items with inferred owners, due dates, verbatim source quotes, and draft Linear/Slack follow-up tickets.

### Run Automated Tests
```bash
pnpm test   # or npm test / node --test
```

---

## Safety & Trust

- Transcription is opt-in per meeting and disabled by default.
- Data remains in connected user systems; Huddle stores only approved brief and action records.
- Huddle drafts communications for user review and never sends external messages automatically.

---

## Prior vs. New Work

Built 100% from scratch during OpenAI Build Week 2026 (July 13–21, 2026) using OpenAI Codex and GPT-5.6. There is no pre-existing codebase or prior implementation.

---

## Connected Roadmap

1. Google Calendar OAuth & 30-minute pre-meeting webhook listener.
2. Direct integration with Slack Web API, Notion SDK, and Linear API.
3. Realtime API audio transcription integration for live meeting listening.
4. Weekly meeting productivity analytics & meeting audit dashboard.

---

## License

[MIT](LICENSE) © 2026 Huddle Team
