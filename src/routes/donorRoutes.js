const express = require('express');
const { getDonors } = require('../controllers');

const donorRouter = express.Router();

donorRouter.get('/donors', getDonors);

module.exports = { donorRouter };
