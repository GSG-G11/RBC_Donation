// Requiring the modules

const fs = require('fs');
const connection = require('../config/db');

// read a file as a stream
const stream = fs.createReadStream('src/db/build/build.sql', 'utf8');

connection.on('error', err => {
  console.log('Error connecting to the database', err);
});

stream.on('data', data => {
  connection.query(data, err => {
    if (err) {
      console.log('Error running query', err);
    }
  });
});

stream.on('end', () => {
  console.log('Tables created successfully');
  connection.end();
});
