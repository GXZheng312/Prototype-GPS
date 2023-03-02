const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  range: {
    type: String,
    required: true
  }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;