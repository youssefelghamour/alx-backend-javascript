const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  describe('rouding a', () => {
    it('rouding down a', () => {
      assert.equal(calculateNumber(3.1, 4), 7);
    });

    it('rouding up a', () => {
      assert.equal(calculateNumber(3.9, 4), 8);
    });
  });

  describe('rouding b', () => {
    it('rouding down b', () => {
      assert.equal(calculateNumber(4, 3.1), 7);
    });
 
    it('rounding up b', () => {
      assert.equal(calculateNumber(4, 3.9), 8);
    });
  });
});
