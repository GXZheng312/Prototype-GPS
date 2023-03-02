const express = require('express');
const router = express.Router();

const testData = {
    "paradeId": 23,
    "locationId": 11,
    "location": {
        "locationId": 11,
        "latitude": 51.7484858,
        "longitude": 5.6297284,
        "range": 100 //units in meters
    }
}

router.get('/:paradeId', function (req, res, next) {
    res.type("json")
        .send(testData);
});

module.exports = router;