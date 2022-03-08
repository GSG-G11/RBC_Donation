const connection = require('../db/config/db');
const queries = require('../db/queries');

const getBanks = async (req, res) => {
  try {
    const banks = await connection.query(queries.getAllBanks);
    res.send(banks.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getBankDonors = async (req, res) => {
  try {
    const donors = await pool.query('SELECT COUNT(*) FROM donors WHERE bank_id = $1', [
      req.params.id,
    ]);
    res.send(donors.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {getBanks, getBankDonors};
