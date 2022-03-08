const {getBanks, getBankDonors} = require('../controllers');

const bankRouter = require('express').Router();

bankRouter.get('/banks', getBanks);
bankRouter.get('/banks/:id/donors', getBankDonors);

module.exports = {bankRouter};
