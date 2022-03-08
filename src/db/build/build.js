//Requiring the modules

const fs = require('fs');
const {pool} = require('../db');

//Read the Build.sql file
const sqlBuildQuery = fs.readFileSync('src/db/build/build.sql', 'utf8');

//Execute the Build.sql file
pool.query(sqlBuildQuery, (err, res) => {
  if (err) {
    return console.error('Error making query', err);
  }

  console.log('Banks Table was successfully Built');
  console.log('Donors Table was successfully Built');
});

//end connection to database
pool.end();
