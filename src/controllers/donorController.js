const connection = require('../db/config/db');
const { getAllDonors, insertDonor } = require('../db/queries');

const getDonors = async (req, res) => {
  try {
    const donors = await connection.query(getAllDonors);
    res.send(donors.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const addDonor = async ({ body }, res) => {
  try {
    const { firstName, lastName, address, age, email, bloodType, bankId } =
      body;
    const { rows } = await connection.query(insertDonor, [
      firstName,
      lastName,
      address,
      age,
      email,
      bloodType,
      bankId,
    ]);
    res.send(rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getDonors, addDonor };
