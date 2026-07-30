import test from 'node:test';
import assert from 'node:assert/strict';
import { buildDateKey, calculateCompletionPercentage, calculateStreak, getMetricColor, getConsistencyLabel } from '../routine-logic.js';

test('buildDateKey formats a Date into YYYY-MM-DD', () => {
  const date = new Date(2026, 6, 8);
  assert.equal(buildDateKey(date), '2026-07-08');
});

test('calculateCompletionPercentage returns 0 for empty totals', () => {
  assert.equal(calculateCompletionPercentage(0, 0), 0);
});

test('calculateCompletionPercentage rounds to nearest percentage', () => {
  assert.equal(calculateCompletionPercentage(3, 4), 75);
  assert.equal(calculateCompletionPercentage(1, 3), 33);
});

test('calculateStreak counts consecutive fully completed days from timeline data', () => {
  const timeline = [
    { key: '2026-07-01' },
    { key: '2026-07-02' },
    { key: '2026-07-03' },
    { key: '2026-07-04' }
  ];
  const userProgress = {
    '2026-07-01': { tasks: [{ completed: true }] },
    '2026-07-02': { tasks: [{ completed: true }] },
    '2026-07-03': { tasks: [{ completed: false }] },
    '2026-07-04': { tasks: [{ completed: true }] }
  };

  assert.equal(calculateStreak(timeline, userProgress), 2);
});

test('getMetricColor and getConsistencyLabel map thresholds correctly', () => {
  assert.equal(getMetricColor(20), '#ef4444');
  assert.equal(getMetricColor(60), '#eab308');
  assert.equal(getMetricColor(90), '#10b981');
  assert.equal(getConsistencyLabel(85), 'Sangat Produktif 🔥');
  assert.equal(getConsistencyLabel(60), 'Cukup Stabil ⚡');
  assert.equal(getConsistencyLabel(20), 'Butuh Fokus 🎯');
});
