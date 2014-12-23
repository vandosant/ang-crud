var mongoose = require('mongoose');

var DataSchema = new mongoose.Schema({
  title: String
});

mongoose.model('Data', DataSchema);