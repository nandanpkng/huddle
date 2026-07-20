const $ = (query) => document.querySelector(query);
let brief;
function renderBrief(value) {
  brief = value;
  $('#brief-title').textContent = value.title;
  $('#brief-purpose').textContent = value.purpose;
  $('#brief-time').textContent = `Prepared now · ${value.modelContract.context.length} sources of context considered`;
  $('#people').innerHTML = value.attendees.map((person) => `<span class="person"><i>${person.initials}</i>${person.name}</span>`).join('');
  $('#decisions').innerHTML = value.decisions.map((item) => `<div class="decision"><span>?</span><div><b>${item.decision}</b><small>${item.owner} · ${item.age}</small></div></div>`).join('');
  $('#talking-points').innerHTML = value.talkingPoints.map((point) => `<li>${point}</li>`).join('');
  $('#sources').innerHTML = value.context.map((source) => `<div class="source"><span class="source-type ${source.type.toLowerCase()}">${source.type}</span><div><b>${source.title}</b><p>${source.summary}</p></div><small>${source.score}%<br/>match</small></div>`).join('');
}
function renderActions(result) {
  const fragment = document.createDocumentFragment(); const template = $('#action-template');
  result.actions.forEach((item) => { const node = template.content.cloneNode(true); node.querySelector('.action-meta b').textContent = item.owner; node.querySelector('.tag').textContent = item.type; node.querySelector('time').textContent = item.due; node.querySelector('p').textContent = item.task; node.querySelector('blockquote').textContent = `“${item.quote}”`; node.querySelector('.action-button').textContent = item.status === 'Email ready' ? 'Review email →' : 'Track →'; fragment.append(node); });
  $('#actions').replaceChildren(fragment);
}
async function init() { const context = await fetch('/api/workspace').then((r) => r.json()); const value = await fetch('/api/briefs/generate', {method:'POST'}).then((r) => r.json()); renderBrief(value); $('#process-meeting').onclick = async () => { const button = $('#process-meeting'); button.textContent = 'Extracting…'; button.disabled = true; const results = await fetch('/api/actions/extract', { method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({transcript:context.transcript}) }).then((r) => r.json()); renderActions(results); button.textContent = '3 actions extracted ✓'; }; }
$('#open-brief').onclick = () => document.querySelector('.brief-card').scrollIntoView({behavior:'smooth',block:'center'});
$('#copy-brief').onclick = () => { navigator.clipboard?.writeText(`${brief.title}\n\n${brief.purpose}\n\n${brief.talkingPoints.map((x,i)=>`${i+1}. ${x}`).join('\n')}`); $('#copy-brief').textContent='Copied ✓'; };
init().catch((error) => { $('#brief-purpose').textContent = `Could not generate brief: ${error.message}`; });
