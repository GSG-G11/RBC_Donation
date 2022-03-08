const connection = require('../db/config/db');
const { getAllDonors, insertDonor, removeDonor } = require('../db/queries');

const getDonors = async (req, res) => {
  try {
    const { rows } = await connection.query(getAllDonors);
    res.send(rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addDonor = async ({ body }, res) => {
  try {
    const { firstName, lastName, address, age, email, bloodType, bankId } =
      body;
    await connection.query(insertDonor, [
      firstName,
      lastName,
      address,
      age,
      email,
      bloodType,
      bankId,
    ]);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteDonor = async ({ params }, res) => {
  try {
    const { id } = params;
    await connection.query(removeDonor, [id]);
    res.redirect('/');
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getDonors, addDonor, deleteDonor };
