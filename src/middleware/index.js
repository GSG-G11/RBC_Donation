const express = require('express');
const compression = require('compression');
const { hidePoweredBy } = require('helmet');
const { bankRouter, donorRouter } = require('../routes');

module.exports = (app) => {
  app.use(compression());
  app.use(hidePoweredBy());
  app.use(express.static('public'));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(bankRouter);
  app.use(donorRouter);
};
