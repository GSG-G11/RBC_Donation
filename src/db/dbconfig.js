require('env2')('./.env');
module.exports = {
  DB_URL: process.env.DB_URL,
};
