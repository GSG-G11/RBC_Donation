const { Pool } = require('pg');
const { URL, SSL } = require('./dbconfig');

const connection = new Pool({
  connectionString: URL,
  ssl: SSL,
});

module.exports = connection;
