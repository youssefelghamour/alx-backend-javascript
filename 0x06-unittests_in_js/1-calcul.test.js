const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {

  describe('SUM', () => {
    describe('rounding a', () => {
      it('rounding down a', () => {
        assert.strictEqual(calculateNumber("SUM", 3.1, 4), 7);
      });

      it('rounding up a', () => {
        assert.strictEqual(calculateNumber("SUM", 3.9, 4), 8);
      });
    });

    describe('rounding b', () => {
      it('rounding down b', () => {
        assert.strictEqual(calculateNumber("SUM", 4, 3.1), 7);
      });

      it('rounding up b', () => {
        assert.strictEqual(calculateNumber("SUM", 4, 3.9), 8);
      });
    });

    describe('rounding both', () => {
      it('both rounding down', () => {
        assert.strictEqual(calculateNumber("SUM", 2.4, 2.4), 4);
      });

      it('both rounding up', () => {
        assert.strictEqual(calculateNumber("SUM", 2.6, 2.6), 6);
      });
    });

    describe('edge cases', () => {
      it('rounding zero', () => {
        assert.strictEqual(calculateNumber("SUM", 0, 0), 0);
      });

      it('rounding negative numbers', () => {
        assert.strictEqual(calculateNumber("SUM", -1.4, -1.4), -2);
      });

      it('rounding mixed sign numbers', () => {
        assert.strictEqual(calculateNumber("SUM", -1.4, 1.4), 0);
      });
    });
  });

  describe('SUBTRACT', () => {
    describe('rounding a', () => {
      it('rounding down a', () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 3.1, 4), -1);
      });

      it('rounding up a', () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 3.9, 4), 0);
      });
    });

    describe('rounding b', () => {
      it('rounding down b', () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 4, 3.1), 1);
      });

      it('rounding up b', () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 4, 3.9), 0);
      });
    });

    describe('rounding both', () => {
      it('both rounding down', () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 2.4, 2.4), 0);
      });

      it('both rounding up', () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 2.6, 2.6), 0);
      });
    });

    describe('edge cases', () => {
      it('rounding zero', () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 0, 0), 0);
      });

      it('rounding negative numbers', () => {
        assert.strictEqual(calculateNumber("SUBTRACT", -1.4, -1.4), 0);
      });

      it('rounding mixed sign numbers', () => {
        assert.strictEqual(calculateNumber("SUBTRACT", -1.4, 1.4), -2);
      });
    });
  });

  describe('DIVIDE', () => {
    describe('rounding a', () => {
      it('rounding down a', () => {
        assert.strictEqual(calculateNumber("DIVIDE", 3.1, 4), 0.75);
      });

      it('rounding up a', () => {
        assert.strictEqual(calculateNumber("DIVIDE", 3.9, 4), 1);
      });
    });

    describe('rounding b', () => {
      it('rounding down b', () => {
        assert.strictEqual(calculateNumber("DIVIDE", 3, 4.1), 0.75);
      });

      it('rounding up b', () => {
        assert.strictEqual(calculateNumber("DIVIDE", 4, 3.9), 1);
      });
    });

    describe('rounding both', () => {
      it('both rounding down', () => {
        assert.strictEqual(calculateNumber("DIVIDE", 2.4, 2.4), 1);
      });

      it('both rounding up', () => {
        assert.strictEqual(calculateNumber("DIVIDE", 2.6, 2.6), 1);
      });
    });

    describe('edge cases', () => {
      it('rounding zero', () => {
        assert.strictEqual(calculateNumber("DIVIDE", 0, 1), 0);
      });

      it('rounding negative numbers', () => {
        assert.strictEqual(calculateNumber("DIVIDE", -1.4, -1.4), 1);
      });

      it('rounding mixed sign numbers', () => {
        assert.strictEqual(calculateNumber("DIVIDE", -1.4, 1.4), -1);
      });

      it('divide by zero', () => {
        assert.strictEqual(calculateNumber("DIVIDE", 1, 0), "Error");
      });
    });
  });

});
