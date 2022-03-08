const express = require('express');
const middlewares = require('./middlewares');
const { donorRouter } = require('./routes');
// const router = require('./routes/index');

const app = express();

// app.use(router);

middlewares(app);
app.use(donorRouter);

app.set('port', process.env.PORT || 3000);

module.exports = app;
