const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {

  describe('SUM', () => {
    describe('rounding a', () => {
      it('rounding down a', () => {
        expect(calculateNumber('SUM', 3.1, 4)).to.equal(7);
      });

      it('rounding up a', () => {
        expect(calculateNumber('SUM', 3.9, 4)).to.equal(8);
      });
    });

    describe('rounding b', () => {
      it('rounding down b', () => {
        expect(calculateNumber('SUM', 4, 3.1)).to.equal(7);
      });

      it('rounding up b', () => {
        expect(calculateNumber('SUM', 4, 3.9)).to.equal(8);
      });
    });

    describe('rounding both', () => {
      it('both rounding down', () => {
        expect(calculateNumber('SUM', 2.4, 2.4)).to.equal(4);
      });

      it('both rounding up', () => {
        expect(calculateNumber('SUM', 2.6, 2.6)).to.equal(6);
      });
    });

    describe('edge cases', () => {
      it('rounding zero', () => {
        expect(calculateNumber('SUM', 0, 0)).to.equal(0);
      });

      it('rounding negative numbers', () => {
        expect(calculateNumber('SUM', -1.4, -1.4)).to.equal(-2);
      });

      it('rounding mixed sign numbers', () => {
        expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
      });
    });
  });

  describe('SUBTRACT', () => {
    describe('rounding a', () => {
      it('rounding down a', () => {
        expect(calculateNumber('SUBTRACT', 3.1, 4)).to.equal(-1);
      });

      it('rounding up a', () => {
        expect(calculateNumber('SUBTRACT', 3.9, 4)).to.equal(0);
      });
    });

    describe('rounding b', () => {
      it('rounding down b', () => {
        expect(calculateNumber('SUBTRACT', 4, 3.1)).to.equal(1);
      });

      it('rounding up b', () => {
        expect(calculateNumber('SUBTRACT', 4, 3.9)).to.equal(0);
      });
    });

    describe('rounding both', () => {
      it('both rounding down', () => {
        expect(calculateNumber('SUBTRACT', 2.4, 2.4)).to.equal(0);
      });

      it('both rounding up', () => {
        expect(calculateNumber('SUBTRACT', 2.6, 2.6)).to.equal(0);
      });
    });

    describe('edge cases', () => {
      it('rounding zero', () => {
        expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
      });

      it('rounding negative numbers', () => {
        expect(calculateNumber('SUBTRACT', -1.4, -1.4)).to.equal(0);
      });

      it('rounding mixed sign numbers', () => {
        expect(calculateNumber('SUBTRACT', -1.4, 1.4)).to.equal(-2);
      });
    });
  });

  describe('DIVIDE', () => {
    it('positive numbers', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });

    it('numbers with different signs', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('numbers with different signs (alternate)', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('negative numbers', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('equal positive numbers', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });

    it('equal rounded up numbers', () => {
      expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
    });

    it('equal rounded down numbers', () => {
      expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
    });

    it('0 and positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('0 and negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('positive number and 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('positive number and number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('positive number and number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('negative number and 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('negative number and number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });

    it('negative number and number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });

});
