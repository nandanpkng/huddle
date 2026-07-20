# Huddle

**A proactive meeting agent that prepares a decision-ready brief before each meeting and turns the conversation into owned follow-through afterward.**

Track: Work & Productivity - OpenAI Build Week 2026

## The problem

A product manager with 15 recurring meetings can lose several hours each week reconstructing context from Slack, notes, and unresolved decisions. Meeting recorders capture what was said; they do not prepare a person for the decision or make sure the next action happens.

Huddle watches the calendar, assembles a focused brief 30 minutes before a meeting, and turns an opt-in transcript into owner-assigned follow-through after it ends. The result is a meeting someone can act on, not another passive summary.

## Try it locally

```bash
cd prepclaw
pnpm start
# Open http://localhost:3001
```

No API key or installation is required to test the complete demo. It ships with realistic Calendar, Slack, Notion, decision, and transcript context. Select **Process demo transcript** to exercise the follow-through workflow.

```bash
pnpm test
```

## Product loop

```text
Calendar event -> rank Slack + Notion context -> GPT-5.6 decision-ready brief
    -> opt-in meeting transcript -> GPT-5.6 extracts owners and dates
    -> draft email / task / Slack follow-up -> open decision carried into next brief
```

The MVP deliberately centers Calendar, Slack, and Notion. Linear creation, Salesforce context, and a live transcription provider are documented next integrations, not misleading mock claims.

## How GPT-5.6 is integrated

GPT-5.6 is the reasoning layer behind two frontier tasks:

1. It ranks and synthesizes context across calendar attendees, Slack threads, Notion account plans, and unresolved decisions into a short, decision-ready pre-meeting brief. This requires relevance judgment across sources, rather than a latest-message summary.
2. It turns an opt-in transcript into grounded action items, inferring an owner and due date only when the transcript supports them and preserving the source quote for review.

The production adapter receives structured input and returns structured output. The local demo uses a deterministic adapter so the judge-testable flow stays reliable without credentials; the response contract in `src/services/brief-engine.js` records the GPT-5.6 context and model role.

## Privacy and trust

- Meeting transcription is opt-in per meeting and off by default.
- Source data stays in the user’s connected systems; Huddle stores only the brief and approved follow-through records.
- The agent drafts external communication and task creation for review. It never silently sends email or creates tickets.
- OAuth tokens must be encrypted at rest with `ENCRYPTION_KEY` in a connected deployment.

## Environment for integrations

Copy `.env.example` and supply only the services you connect. A production deployment needs Google Calendar OAuth plus Slack and Notion tokens; Linear is optional.

## Codex workflow

Built in the primary Codex Build Week session. Codex was asked to translate the project implementation plan into a coherent, runnable product rather than a static concept: it created the proactive calendar-to-brief flow, the grounded transcript-to-action extraction logic, the responsive workspace, unit tests, local API, and the submission materials. Before submitting, add the `/feedback` session ID from the primary build thread to the Devpost form and this README.

## Build log

- Day 1: scaffolded the local product surface and calendar meeting model.
- Day 2: added cross-tool context ranking and the decision-ready brief contract.
- Day 3: built grounded action extraction with explicit source quotes.
- Day 4: added the responsive dashboard, local test path, safety boundaries, and submission collateral.

## Roadmap

1. Google Calendar OAuth and a five-minute watcher that wakes 30 minutes before eligible meetings.
2. Live Slack search and Notion retrieval with user-scoped OAuth permissions.
3. One-click Linear ticket creation and reviewable email drafts.
4. User-controlled preference learning and an optional transcription provider.

## License

MIT. See [LICENSE](LICENSE).
