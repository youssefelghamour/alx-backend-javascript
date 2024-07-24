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
    describe('rounding a', () => {
      it('rounding down a', () => {
        expect(calculateNumber('DIVIDE', 3.1, 4)).to.equal(0.75);
      });

      it('rounding up a', () => {
        expect(calculateNumber('DIVIDE', 3.9, 4)).to.equal(1);
      });
    });

    describe('rounding b', () => {
      it('rounding down b', () => {
        expect(calculateNumber('DIVIDE', 3, 4.1)).to.equal(0.75);
      });

      it('rounding up b', () => {
        expect(calculateNumber('DIVIDE', 4, 3.9)).to.equal(1);
      });
    });

    describe('rounding both', () => {
      it('both rounding down', () => {
        expect(calculateNumber('DIVIDE', 2.4, 2.4)).to.equal(1);
      });

      it('both rounding up', () => {
        expect(calculateNumber('DIVIDE', 2.6, 2.6)).to.equal(1);
      });
    });

    describe('edge cases', () => {
      it('rounding zero', () => {
        expect(calculateNumber('DIVIDE', 0, 1)).to.equal(0);
      });

      it('rounding negative numbers', () => {
        expect(calculateNumber('DIVIDE', -1.4, -1.4)).to.equal(1);
      });

      it('rounding mixed sign numbers', () => {
        expect(calculateNumber('DIVIDE', -1.4, 1.4)).to.equal(-1);
      });

      it('divide by zero', () => {
        expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
      });
    });
  });

});
