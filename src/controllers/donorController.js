const connection = require('../db/config/db');
const { getAllDonors, insertDonor, removeDonor } = require('../db/queries');

const getDonors = async (req, res) => {
  try {
    const { rows } = await connection.query(getAllDonors);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addDonor = async ({ body }, res) => {
  try {
    const { firstName, lastName, address, age, email, bloodType, bankId } =
      body;
    const isBloodTypeAndBank = !bloodType || !bankId;
    if (
      !firstName ||
      !lastName ||
      !address ||
      !age ||
      !email ||
      !bloodType ||
      !bankId
    ) {
      res.status(401).json('Please fill all fields');
    } else if (!email.includes('@')) {
      res.status(401).json('Please enter a valid email');
    } else if (age < 18) {
      res.status(401).json('You must be 18 or older to donate blood');
    } else if (isBloodTypeAndBank) {
      res.status(401).json('Please select the blood type and bank');
    } else {
      await connection.query(insertDonor, [
        firstName.trim(),
        lastName.trim(),
        address.trim(),
        age.trim(),
        email.trim(),
        bloodType.trim(),
        bankId.trim(),
      ]);
      res.redirect('/');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteDonor = async ({ params }, res) => {
  try {
    const { id } = params;
    const { rowCount } = await connection.query(removeDonor, [id]);
    res.status(200).json(rowCount);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getDonors, addDonor, deleteDonor };
