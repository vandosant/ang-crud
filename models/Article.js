var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  url: String
});

ArticleSchema.method('update', function (params) {
  this.url = params.url;
  this.save();
});

ArticleSchema.method('destroy', function () {
  this.remove();
});

mongoose.model('Article', ArticleSchema);