const getAllBanks = 'SELECT * FROM banks';
const getBankDonorsNumber = 'SELECT COUNT(*) FROM donors WHERE bank_id = $1';
const getAllDonors = 'SELECT * FROM donors';


module.exports = { getAllBanks, getAllDonorsو getAllBanks, getBankDonorsNumber };
