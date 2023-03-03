const express = require('express');
const router = express.Router();
const Location = require('../../../models/location');

router.get('/', function (req, res, next) {
    res.send('hello from home location');
});

router.use(express.json());

router.post('/', async (req, res) => {
    try {
      const newData = new Location(req.body);
      await newData.save();
      res.status(201).json(newData);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;