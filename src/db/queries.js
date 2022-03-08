const getAllBanks = 'SELECT * FROM banks';
const getBankDonorsNumber = 'SELECT COUNT(*) FROM donors WHERE bank_id = $1';

const getAllDonors = 'SELECT * FROM donors';
const insertDonor =
  'INSERT INTO donors (first_name, last_name, address, age, email, blood_type, bank_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *;';

module.exports = {
  getAllBanks,
  getAllDonors,
  getBankDonorsNumber,
  insertDonor,
};
