const { Pool } = require('pg');
const URL = require('./dbconfig');

const pool = new Pool({ connectionString: URL, ssl: false });

module.exports = { pool };
