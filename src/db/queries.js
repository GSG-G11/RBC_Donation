const getAllBanks = 'SELECT * FROM banks';
const getBankDonorsNumber = 'SELECT COUNT(*) FROM donors WHERE bank_id = $1';
const getAllDonors = 'SELECT * FROM donors ORDER BY id DESC LIMIT 5';

module.exports = {getAllBanks, getAllDonors, getBankDonorsNumber};
