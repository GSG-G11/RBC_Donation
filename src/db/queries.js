const getAllBanks = 'SELECT * FROM banks';
const getBankDonorsNumber = 'SELECT COUNT(*) FROM donors WHERE bank_id = $1';
module.exports = {getAllBanks, getBankDonorsNumber};
