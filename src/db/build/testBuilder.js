const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('../config/db');

const dbBuild = () => {
  const sql = readFileSync(
    join(__dirname, '..', 'build/build.sql'),
  ).toString();
  
  return connection.query(sql);
};

module.exports = dbBuild;
