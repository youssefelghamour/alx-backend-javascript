const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // create a spy for console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // restore the original console.log
    consoleSpy.restore();
  });

  it('should log the correct message with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('should log the correct message with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
