const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with type SUM and correct arguments', () => {
    // stub Utils.calculateNumber
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // spy on console.log
    const logSpy = sinon.spy(console, 'log');

    // call the function
    sendPaymentRequestToApi(100, 20);

    // assertions
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledWith('The total is: 10')).to.be.true;

    // restore original functions
    stub.restore();
    logSpy.restore();
  });
});
