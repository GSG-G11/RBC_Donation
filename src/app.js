const express = require('express');
const middlewares = require('./middlewares');
// const router = require('./routes/index');

const app = express();

// app.use(router);

middlewares(app);

app.set('port', process.env.PORT || 3000);

module.exports = app;
