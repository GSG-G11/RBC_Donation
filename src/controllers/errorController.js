const { join } = require('path');

const getNotFoundError = (req, res, next) => {
  try {
    res
      .status(404)
      .sendFile(join(__dirname, '..', '..', 'public', 'error', '404.html'));
  } catch (err) {
    next(err);
  }
};

const getServerError = (err, req, res, next) => {
  try {
    res
      .status(500)
      .sendFile(join(__dirname, '..', '..', 'public', 'error', '500.html'));
  } catch (error) {
    next(error);
  }
};

module.exports = { getNotFoundError, getServerError };
