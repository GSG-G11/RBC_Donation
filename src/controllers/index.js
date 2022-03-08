const { getBanks, getBankDonors } = require('./bankController');
const { getDonors, addDonor, deleteDonor } = require('./donorController');

module.exports = {
  getBanks,
  getBankDonors,
  getDonors,
  addDonor,
  deleteDonor,
};
