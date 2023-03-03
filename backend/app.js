const express = require('express');
const app = express();
const mongodb = require('./services/mongodb')();

app.use('/', require('./routes'));

module.exports = app;