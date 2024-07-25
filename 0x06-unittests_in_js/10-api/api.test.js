const request = require('request');
const { expect } = require('chai');

describe('API integration tests', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_error, response, bodyContent) => {
      expect(response.statusCode).to.be.equal(200);
      expect(bodyContent).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/123`, (_error, response, bodyContent) => {
      expect(response.statusCode).to.be.equal(200);
      expect(bodyContent).to.be.equal('Payment methods for cart 123');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-123`, (_error, response, _bodyContent) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/abc-456-def`, (_error, response, _bodyContent) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login returns valid response', (done) => {
    request.post(`${API_URL}/login`, { json: { userName: 'Youssef' } }, (_error, response, bodyContent) => {
      expect(response.statusCode).to.be.equal(200);
      expect(bodyContent).to.be.equal('Welcome Youssef');
      done();
    });
  });

  it('GET /available_payments returns valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (_error, response, bodyContent) => {
      expect(response.statusCode).to.be.equal(200);
      expect(JSON.parse(bodyContent))
        .to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
});
