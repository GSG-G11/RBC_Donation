/* eslint-disable consistent-return */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const ID = 1;
const ValidInputForm = {
  firstName: 'Ahmed new',
  lastName: 'Mohamed new',
  address: 'Tel el hawa new',
  age: 24,
  email: 'ahmednew@gmail.com',
  bloodType: '+AB',
  bankId: 2,
};
const emptyInputForm = {
  firstName: '',
  lastName: '',
  address: '',
  age: '',
  email: '',
  bloodType: '',
  bankId: '',
};
const invalidAgeInputForm = {
  firstName: 'abd',
  lastName: 'ali',
  address: 'ps - gsg ',
  age: 15,
  email: 'abd_ali@gsg.com',
  bloodType: '+O',
  bankId: 1,
};
const invalidEmail = {
  firstName: 'abd hhh',
  lastName: 'ali hhh',
  address: 'ps - gsg - 2',
  age: 20,
  email: 'hi iam email',
  bloodType: '+AB',
  bankId: 3,
};
const hasBloodTypeAndBank = {
  firstName: 'ali',
  lastName: 'moh',
  address: 'palestine - gsg - 2',
  age: 23,
  email: 'ali_2021@gsg.com',
  bloodType: '',
  bankId: 1,
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

describe('Test the donors path in server', () => {
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
      .send(ValidInputForm)
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

describe('Test the donors path in server, Test Failed Cases', () => {
  test('Test should fail case (empty Input Form), and then return status 400', (done) => {
    request(app)
      .post('/donor')
      .expect(400)
      .expect('content-type', 'application/json; charset=utf-8')
      .send(emptyInputForm)
      .end((err, { text }) => {
        if (err) return done(err);
        const { message } = JSON.parse(text);
        expect(message).toBe('Please fill all fields');
        return done();
      });
  });
  test('Test should fail case (invalid age Input Form), and then return status 400', (done) => {
    request(app)
      .post('/donor')
      .expect(400)
      .expect('content-type', 'application/json; charset=utf-8')
      .send(invalidAgeInputForm)
      .end((err, { text }) => {
        if (err) return done(err);
        const { message } = JSON.parse(text);
        expect(message).toBe('You must be 18 or older to donate blood');
        return done();
      });
  });
  test('Test should fail case (invalid age Input Form), and then return status 400', (done) => {
    request(app)
      .post('/donor')
      .expect(400)
      .expect('content-type', 'application/json; charset=utf-8')
      .send(invalidEmail)
      .end((err, { text }) => {
        if (err) return done(err);
        const { message } = JSON.parse(text);
        expect(message).toBe('Please enter a valid email');
        return done();
      });
  });

  test('Test should fail case (invalid age Input Form), and then return status 400', (done) => {
    request(app)
      .post('/donor')
      .expect(400)
      .expect('content-type', 'application/json; charset=utf-8')
      .send(hasBloodTypeAndBank)
      .end((err, { text }) => {
        if (err) return done(err);
        const { message } = JSON.parse(text);
        expect(message).toBe('Please select the blood type and bank');
        return done();
      });
  });
});
