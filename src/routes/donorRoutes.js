const express = require('express');
const { getDonors, addDonor } = require('../controllers');

const donorRouter = express.Router();

donorRouter.get('/donors', getDonors);
donorRouter.post('/donor', addDonor);

module.exports = { donorRouter };
