const express = require('express');
const { getBanks } = require('../controllers');

const bankRouter = express.Router();

bankRouter.get('/banks', getBanks);

module.exports = { bankRouter };
