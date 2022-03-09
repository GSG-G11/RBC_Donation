const { getBanks, getBankDonors } = require('./bankController');
const { getDonors, addDonor, deleteDonor } = require('./donorController');
const { getNotFoundError, getServerError } = require('./errorController');

module.exports = {
  getBanks,
  getBankDonors,
  getDonors,
  addDonor,
  deleteDonor,
  getNotFoundError,
  getServerError,
};
