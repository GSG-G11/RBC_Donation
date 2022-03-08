const connection = require('../db/config/db');
const { getAllBanks, getBankDonorsNumber } = require('../db/queries');

const getBanks = async (req, res) => {
  try {
    const { rows } = await connection.query(getAllBanks);
    res.send(rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getBankDonors = async ({ params }, res) => {
  try {
    const { id } = params;
    const { rows } = await connection.query(getBankDonorsNumber, [id]);
    res.send(rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getBanks, getBankDonors };
