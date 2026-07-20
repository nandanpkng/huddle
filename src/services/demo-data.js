export const workspace = {
  user: { name: 'Aisha Rao', role: 'Product manager', timezone: 'Asia/Kolkata' },
  meeting: {
    id: 'm-42', title: 'Acme renewal decision', start: 'Today, 2:30 PM', duration: '45 min', calendar: 'Customer Success',
    attendees: [
      { initials: 'JS', name: 'Jordan Smith', role: 'VP Operations, Acme', context: 'Last spoke 12 days ago' },
      { initials: 'LC', name: 'Leah Chen', role: 'Account Executive', context: 'Owns renewal proposal' },
      { initials: 'AR', name: 'Aisha Rao', role: 'Product', context: 'Meeting owner' }
    ]
  },
  sources: [
    { type: 'Slack', title: '#acme-renewal - security questionnaire', summary: 'Jordan asked whether SSO audit logging is included in the Enterprise plan.', age: 'Yesterday', score: 96 },
    { type: 'Notion', title: 'Acme Q3 account plan', summary: 'Renewal target: $180K ARR. Expansion depends on audit logs and a September rollout.', age: '3 days ago', score: 91 },
    { type: 'Slack', title: '#product - audit log launch timing', summary: 'Engineering expects a beta by Aug 28, subject to an API review.', age: '4 days ago', score: 84 }
  ],
  openDecisions: [
    { decision: 'Can we commit to audit-log beta timing in the renewal?', owner: 'Aisha', age: 'Open since Jul 12' },
    { decision: 'Is SSO logging included or an add-on?', owner: 'Leah', age: 'Open since Jul 15' }
  ],
  transcript: `Jordan: We need confidence on audit logging before I can take this renewal to procurement.\nAisha: The current plan is beta by August 28. I will confirm that date with engineering by Wednesday.\nLeah: I will send Jordan the updated Enterprise pricing and clarify the SSO entitlement today.\nJordan: If the timing is confirmed, I can start procurement next week.`
};
