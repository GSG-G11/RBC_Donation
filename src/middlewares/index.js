const express = require('express');
const compression = require('compression');
const {bankRouter} = require('../routes');

module.exports = app => {
  app.use(compression());
  app.use(express.static('public'));
  app.use(express.urlencoded({extended: false}));
  app.use(express.json());
  app.use(bankRouter);
};
