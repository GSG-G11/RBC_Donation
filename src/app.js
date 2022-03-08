const express = require('express');
const app = express();
const {pool} = require('../src/db/db');

//Test connection to database
pool.connect(err => {
  if (err) {
    return console.error('Error connecting to DB', err);
  }
  console.log('connected to DB');
});

module.exports = app;
