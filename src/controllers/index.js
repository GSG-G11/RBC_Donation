const { getBanks, getBankDonors } = require('./bankController');
const { getDonors, addDonor } = require('./donorController');

module.exports = {
  getBanks,
  getBankDonors,
  getDonors,
  addDonor,
};
