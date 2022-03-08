const connection = require('../db/config/db');
const { getAllBanks } = require('../db/queries');

const getBanks = async (req, res) => {
  try {
    const banks = await connection.query(getAllBanks);
    res.send(banks.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getBanks };
