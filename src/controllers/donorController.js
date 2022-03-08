const connection = require('../db/config/db');
const { getAllDonors } = require('../db/queries');

const getDonors = async (req, res) => {
  try {
    const donors = await connection.query(getAllDonors);
    res.send(donors.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getDonors };
