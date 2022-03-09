const { Pool } = require('pg');
const URL = require('./dbconfig');

const connection = new Pool({
  connectionString: URL,
  ssl: { rejectUnauthorized: false },
});

module.exports = connection;
