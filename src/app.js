const express = require('express');
const app = express();
const {pool} = require('../src/db/db');
const {bankRouter} = require('./routes');

app.use(bankRouter);

app.use(express.static('public'));

pool.connect(err => {
  if (err) {
    return console.error('Error connecting to DB', err);
  }
  console.log('connected to DB');
});

module.exports = app;
