const request = require('request');
const { expect } = require('chai');

describe('Cart API endpoint tests', () => {
  const API_URL = 'http://localhost:7865';

  it('should return a 200 status code and the welcome message at the root endpoint', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return a 200 status code and the correct message for valid numeric cart IDs', (done) => {
    request.get(`${API_URL}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return a 404 status code for non-numeric cart ID values', (done) => {
    request.get(`${API_URL}/cart/invalid`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('should return a 404 status code for negative numeric cart ID values', (done) => {
    request.get(`${API_URL}/cart/-1`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
