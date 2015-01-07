var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AutomobileSchema = new Schema({
  make: String,
  model: String,
  year: String
});

mongoose.model('Automobile', AutomobileSchema);