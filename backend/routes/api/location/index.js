const express = require('express');
const router = express.Router();
const Location = require('../../../models/location');

router.use(express.json());


router.get('/', async (req, res) => {
	try {
		Location.find({})
				.then(data => {
					return res.json(data[data.length - 1]);
				});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

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