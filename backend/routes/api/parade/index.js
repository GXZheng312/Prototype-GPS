const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.send('hello from home parade');
});

router.use('/gps-location', require('./gps-location'));

module.exports = router;