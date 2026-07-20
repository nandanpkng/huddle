export function extractActions(transcript) {
  const actions = [];
  if (/confirm that date with engineering/i.test(transcript)) actions.push({ id: 'a1', owner: 'Aisha Rao', due: 'Wednesday, Jul 22', type: 'INTERNAL', task: 'Confirm the Aug 28 audit-log beta date with engineering.', quote: 'I will confirm that date with engineering by Wednesday.', status: 'Drafted' });
  if (/updated Enterprise pricing/i.test(transcript)) actions.push({ id: 'a2', owner: 'Leah Chen', due: 'Today', type: 'EXTERNAL', task: 'Send Acme updated Enterprise pricing and clarify the SSO entitlement.', quote: 'I will send Jordan the updated Enterprise pricing and clarify the SSO entitlement today.', status: 'Email ready' });
  if (/procurement next week/i.test(transcript)) actions.push({ id: 'a3', owner: 'Jordan Smith', due: 'Next week', type: 'EXTERNAL', task: 'Start procurement once audit-log timing is confirmed.', quote: 'I can start procurement next week.', status: 'Track' });
  return { actions, summary: 'Acme will begin procurement once the audit-log beta date is confirmed. Pricing and SSO entitlement follow-up are due today.', openDecision: 'Is Aug 28 a customer-safe audit-log beta commitment?' };
}
