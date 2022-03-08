const express = require('express');
const { getDonors, addDonor, deleteDonor } = require('../controllers');

const donorRouter = express.Router();

donorRouter.get('/donors', getDonors);
donorRouter.post('/donor', addDonor);
donorRouter.delete('/donor/:id', deleteDonor);

module.exports = { donorRouter };
