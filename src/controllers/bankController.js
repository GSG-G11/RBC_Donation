const connection = require('../db/config/db');
const { getAllBanks, getBankDonorsNumber } = require('../db/queries');

const getBanks = async (req, res) => {
  try {
    const banks = await connection.query(getAllBanks);
    res.send(banks.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getBankDonors = async ({ params }, res) => {
  try {
    const { id } = params;
    const donors = await connection.query(getBankDonorsNumber, [id]);
    res.send(donors.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getBanks, getBankDonors };
