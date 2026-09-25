import { test } from "node:test";
import assert from "node:assert/strict";

function getLevelProgress(xp) {
  const level = Math.floor(xp / 500) + 1;
  const currentXP = xp % 500;
  const nextLevelXP = 500;
  const percent = Math.min(100, Math.round((currentXP / nextLevelXP) * 100));
  return { level, currentXP, nextLevelXP, percent };
}

function formatXP(xp) {
  return xp.toLocaleString();
}

test("getLevelProgress calculates correct levels and percentage", () => {
  const res1 = getLevelProgress(0);
  assert.equal(res1.level, 1);
  assert.equal(res1.currentXP, 0);
  assert.equal(res1.percent, 0);

  const res2 = getLevelProgress(350);
  assert.equal(res2.level, 1);
  assert.equal(res2.currentXP, 350);
  assert.equal(res2.percent, 70);

  const res3 = getLevelProgress(3450);
  assert.equal(res3.level, 7);
  assert.equal(res3.currentXP, 450);
  assert.equal(res3.percent, 90);
});

test("formatXP handles zero and large numbers", () => {
  assert.equal(formatXP(0), "0");
  assert.equal(formatXP(3450), "3,450");
  assert.equal(formatXP(12800), "12,800");
});
