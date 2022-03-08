const express = require('express');
const { getDonors, addDonor, deleteDonor } = require('../controllers');

const donorRouter = express.Router();

donorRouter.get('/donors', getDonors);
donorRouter.post('/donor', addDonor);
donorRouter.post('/donor/:id', deleteDonor);

module.exports = { donorRouter };
