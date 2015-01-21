var mongoose = require('mongoose');

var ColorSchema = new mongoose.Schema({
  name: String,
  saturation: Number,
  wavelength: Number
});

mongoose.model('Color', ColorSchema);