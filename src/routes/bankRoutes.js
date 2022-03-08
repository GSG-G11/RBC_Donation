const {getBanks} = require('../controllers');

const bankRouter = require('express').Router();

bankRouter.get('/banks', getBanks);

module.exports = {bankRouter};
