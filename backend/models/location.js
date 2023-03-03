const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  longitude: String,
  latitude: String,
  range: String,
});

module.exports = mongoose.model('Location', locationSchema);