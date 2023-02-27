    const express = require('express');
    const mongoose = require('mongoose');
    const Location = require('./models/location');

    const app = express();
    const port = 3000;

    mongoose.connect('mongodb://127.0.0.1:27017/gpsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });

    app.use(express.json());

    app.post('/locations', async (req, res) => {
    const { latitude, longitude, range } = req.body;

    try {
        const location = new Location({ latitude, longitude, range });
        await location.save();
        res.json(location);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to save location' });
    }
    });

    app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    });