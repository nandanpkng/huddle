# Huddle submission checklist

Use this before submitting to OpenAI Build Week. The current project satisfies the local code, README, test path, license, privacy positioning, and GPT-5.6 documentation portions. The remaining external items need the submitter’s final links and details.

## Required before Devpost submission

- [ ] Confirm `Huddle` is your chosen final name.
- [ ] Select **Work & Productivity** as the single track.
- [ ] Add the public repository URL and confirm the MIT license is visible.
- [ ] Record a public or unlisted YouTube demo no longer than 3 minutes, with voiceover.
- [ ] In the voiceover, explicitly explain: what was built, how Codex built it, and why GPT-5.6 is doing substantive cross-source reasoning and transcript action extraction.
- [ ] Add the primary Codex `/feedback` Session ID to the Devpost form and replace the placeholder note in `README.md`.
- [ ] Confirm the README includes setup, sample/demo data, GPT-5.6 role, Codex workflow, build log, roadmap, and license.
- [ ] Verify the repository is public or shared with both required judging email addresses if private.

## Strongly recommended

- [ ] Deploy a temporary demo URL and test it in an incognito browser.
- [ ] Use the included demo data in the video: show the calendar wake-up, the generated brief, then click **Process demo transcript** to show actions with owners, dates, and quotes.
- [ ] Add a real user quote from a PM, founder, account manager, or sales lead.
- [ ] Test the final YouTube link in an incognito window.
- [ ] Submit ahead of the deadline.

## Suggested 180-second demo outline

| Time | Show | Say |
| --- | --- | --- |
| 0-15s | Finished brief | "This is a proactive meeting agent for people who walk into recurring meetings cold." |
| 15-45s | Problem and calendar event | Explain the manual Slack, notes, and decision-reconstruction burden. |
| 45-105s | Brief, ranked source context, then action extraction | Show the agent’s end-to-end loop and the reviewable follow-through. |
| 105-145s | Primary Codex session | Show the build prompts, generated code, and iteration/testing. |
| 145-165s | `brief-engine.js` and `action-engine.js` | Explain the non-decorative GPT-5.6 reasoning tasks. |
| 165-180s | Polished workspace | Tie it to proactive action, privacy controls, and measurable preparation time saved. |

## Claims to keep accurate

- The local build is a fully runnable, deterministic demonstration; do not claim live Calendar, Slack, Notion, Linear, email, or transcription integrations until they are actually connected.
- Do not claim that Huddle sends email or creates tickets without human review.
- Keep transcription described as opt-in and off by default.
