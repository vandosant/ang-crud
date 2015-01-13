var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AutomobileSchema = new Schema({
  make: String,
  model: String,
  year: Number
});

AutomobileSchema.method('update', function (params) {
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.save()
});

AutomobileSchema.method('destroy', function(params) {
  this.remove();
});

mongoose.model('Automobile', AutomobileSchema);