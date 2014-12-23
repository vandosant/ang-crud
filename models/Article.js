var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  url: String
});

mongoose.model('Article', ArticleSchema);