const express = require('express');
const middleware = require('./middleware');

const app = express();

middleware(app);

app.set('port', process.env.PORT || 3000);

module.exports = app;
