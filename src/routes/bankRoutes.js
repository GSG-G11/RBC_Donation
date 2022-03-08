const express = require('express');
const { getBanks, getBankDonors } = require('../controllers');

const bankRouter = express.Router();

bankRouter.get('/banks', getBanks);
bankRouter.get('/banks/:id/donors', getBankDonors);

module.exports = { bankRouter };
