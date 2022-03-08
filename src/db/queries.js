const getAllBanks = 'SELECT * FROM banks';

const getBankDonorsNumber = 'SELECT COUNT(*) FROM donors WHERE bank_id = $1';

const getAllDonors =
  'SELECT d.id, d.first_name, d.last_name, d.blood_type, b.name AS bank_name FROM donors AS d  JOIN banks AS b  ON b.id = d.bank_id ORDER BY d.id DESC LIMIT 5;';

const insertDonor =
  'INSERT INTO donors (first_name, last_name, address, age, email, blood_type, bank_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *;';

const removeDonor = 'DELETE FROM donors WHERE id = $1 RETURNING *;';

module.exports = {
  getAllBanks,
  getAllDonors,
  getBankDonorsNumber,
  insertDonor,
  removeDonor,
};
