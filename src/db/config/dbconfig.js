require('env2')('./.env');

// eslint-disable-next-line object-curly-newline
const { NODE_ENV, DATABASE_URL, DEV_DB_URL, TEST_DB_URL } = process.env;
let URL;

switch (NODE_ENV) {
  case 'production':
    URL = DATABASE_URL;
    break;
  case 'development':
    URL = DEV_DB_URL;
    break;
  case 'test':
    URL = TEST_DB_URL;
    break;
  default:
    throw new Error({ message: 'Error when connect DataBase' });
}

module.exports = URL;
