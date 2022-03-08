const {pool} = require('../db/db');
const queries = require('../db/queries');

const getBanks = async (req, res) => {
  try {
    const banks = await pool.query(queries.getAllBanks);
    res.send(banks.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {getBanks};
