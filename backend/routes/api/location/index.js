const express = require('express');
const router = express.Router();
const Location = require('../../../models/location');

router.get('/', function (req, res, next) {
    res.send('hello from home location');
});

// create a route for POST requests to /locations
router.post('/', async (req, res) => {
    try {
        const { longitude, latitude, range } = req.body;

        // create a new Location model instance with the form data
        const Location = mongoose.model('Location');
        const newLocation = new Location({ longitude, latitude, range });

        // save the new location to the database
        const savedLocation = await newLocation.save();

        res.json(savedLocation);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
});

module.exports = router;