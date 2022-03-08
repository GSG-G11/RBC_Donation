const express = require('express');
const app = express();
const {pool} = require('../src/db/db');

app.use(express.static('public'));
//Test connection to database
pool.connect(err => {
  if (err) {
    return console.error('Error connecting to DB', err);
  }
  console.log('connected to DB');
});

module.exports = app;
