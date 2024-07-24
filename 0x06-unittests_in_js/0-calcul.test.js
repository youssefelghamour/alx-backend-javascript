const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  describe('rounding a', () => {
    it('rounding down a', () => {
      assert.strictEqual(calculateNumber(3.1, 4), 7);
    });

    it('rounding up a', () => {
      assert.strictEqual(calculateNumber(3.9, 4), 8);
    });
  });

  describe('rounding b', () => {
    it('rounding down b', () => {
      assert.strictEqual(calculateNumber(4, 3.1), 7);
    });

    it('rounding up b', () => {
      assert.strictEqual(calculateNumber(4, 3.9), 8);
    });
  });

  describe('rounding both', () => {
    it('both rounding down', () => {
      assert.strictEqual(calculateNumber(2.4, 2.4), 4);
    });

    it('both rounding up', () => {
      assert.strictEqual(calculateNumber(2.6, 2.6), 6);
    });
  });

  describe('edge cases', () => {
    it('rounding zero', () => {
      assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('rounding negative numbers', () => {
      assert.strictEqual(calculateNumber(-1.4, -1.4), -2);
    });

    it('rounding mixed sign numbers', () => {
      assert.strictEqual(calculateNumber(-1.4, 1.4), 0);
    });
  });
});
