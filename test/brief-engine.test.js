import test from 'node:test';
import assert from 'node:assert/strict';
import { workspace } from '../src/services/demo-data.js';
import { composeBrief } from '../src/services/brief-engine.js';
import { extractActions } from '../src/services/action-engine.js';

test('creates a decision-ready brief with ranked context', () => {
  const brief = composeBrief(workspace);
  assert.equal(brief.readiness, 'Prepared');
  assert.equal(brief.context.length, 3);
  assert.equal(brief.talkingPoints.length, 3);
});
test('extracts grounded follow-through from a transcript', () => {
  const result = extractActions(workspace.transcript);
  assert.equal(result.actions.length, 3);
  assert.equal(result.actions[1].status, 'Email ready');
});
