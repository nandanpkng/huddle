export function composeBrief(context) {
  const meeting = context.meeting;
  return {
    title: meeting.title,
    generatedAt: new Date().toISOString(),
    readiness: 'Prepared',
    purpose: 'Align on the renewal path, resolve the audit-log commitment, and unblock Acme procurement.',
    attendees: meeting.attendees,
    context: context.sources,
    decisions: context.openDecisions,
    talkingPoints: [
      'Confirm whether Aug 28 is a customer-safe audit-log beta date and name the dependency.',
      'Clarify Enterprise SSO audit-log entitlement and send the pricing update before close of business.',
      'Agree on the procurement start date and the single owner for security follow-up.'
    ],
    modelContract: {
      model: process.env.OPENAI_MODEL || 'gpt-5.6',
      context: ['calendar event and attendees', 'ranked Slack threads', 'relevant Notion documents', 'open decisions'],
      reason: 'GPT-5.6 synthesizes cross-source context into a decision-ready brief, rather than summarizing the newest messages.'
    }
  };
}
