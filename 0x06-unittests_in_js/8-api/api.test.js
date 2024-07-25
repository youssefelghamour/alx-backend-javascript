const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  it('should return a status code 200', (done) => {
    request.get('http://localhost:7865', (err, res) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
