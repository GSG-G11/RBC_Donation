const express = require('express');
const middleware = require('./middleware');
const { getNotFoundError, getServerError } = require('./controllers');

const app = express();

middleware(app);

app.use(getNotFoundError);
app.use(getServerError);

app.set('port', process.env.PORT || 3000);

module.exports = app;
