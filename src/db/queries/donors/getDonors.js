const connection = require('../../config/db');

const getDonorsQuery = () => {
  const sqlQuery = {
    text: 'SELECT * FROM donors;',
  };
  return connection.query(sqlQuery);
};

module.exports = getDonorsQuery;
