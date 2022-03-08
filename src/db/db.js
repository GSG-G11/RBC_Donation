const {Pool} = require('pg');
const {DB_URL} = require('./dbconfig');

const pool = new Pool({connectionString: DB_URL, ssl: false});

module.exports = {pool};
