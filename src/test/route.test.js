/* eslint-disable consistent-return */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const ID = 1;
const inputForm = {
  firstName: 'Ahmed new',
  lastName: 'Mohamed new',
  address: 'Tel el hawa new',
  age: 24,
  email: 'ahmednew@gmail.com',
  bloodType: '+AB',
  bankId: 2,
};

describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end((error) => {
        if (error) return done(error);
        return done();
      });
  });
});

describe('Test the unknown path in server', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/unknown')
      .expect(404)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end((error) => {
        if (error) return done(error);
        return done();
      });
  });
  test('It should response the GET method', (done) => {
    request(app)
      .get('/404')
      .expect(404)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end((error) => {
        if (error) return done(error);
        return done();
      });
  });
});

// /banks
// /banks/:id/donors

describe('Test the banks of blood path in server', () => {
  test('GET Route /banks | status 200 | content-type JSON', (done) => {
    request(app)
      .get('/banks')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  test('GET Route /banks/:id/donors | status 200 | content-type JSON', (done) => {
    request(app)
      .get(`/banks/${ID}/donors`)
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

// /donors
// /donor
// /donor/:id
describe('Test the banks of blood path in server', () => {
  test('GET Route /donors | status 200 | content-type JSON', (done) => {
    request(app)
      .get('/donors')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  test('POST Route /donor, status 200, text/plain', (done) => {
    request(app)
      .post('/donor')
      .expect(302)
      .expect('content-type', 'text/plain; charset=utf-8')
      .send(inputForm)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  test('Delete Route /banks/:id/donors | status 302 | content-type JSON', (done) => {
    request(app)
      .delete(`/donor/${ID}`)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
