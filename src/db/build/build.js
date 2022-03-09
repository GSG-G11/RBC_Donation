// Requiring the modules

const fs = require('fs');
const connection = require('../config/db');

// Read the Build.sql file
const sqlBuildQuery = fs.readFileSync('src/db/build/build.sql', 'utf8');

// Execute the Build.sql file
connection.query(sqlBuildQuery, (err) => {
  if (err) {
    return console.error('Error making query', err);
  }

  return console.log(
    'Banks Table was successfully Built',
    'Donors Table was successfully Built',
  );
});

// end connection to database
connection.end();
