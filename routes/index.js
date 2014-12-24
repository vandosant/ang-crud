var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = mongoose.model('Article');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {title: 'Express'});
});


router.get('/articles', function (reg, res) {
  Article.find(function (err, articles) {
    if (err) {
      return next(err);
    }
    res.json(articles);
  })
});

router.post('/articles', function (req, res) {
  var article = new Article(req.body);
  article.save(function (err, article) {
    if (err) {
      return next(err);
    }
    res.json(article)
  });
});

router.param('article', function (req, res, next, id) {
  var query = Article.findById(id);

  query.exec(function (err, article) {
    if (err) {
      return next(err);
    }
    if (!article) {
      return next(new Error('article not found'));
    }

    req.article = article;
    return next();
  });
});

router.get('/articles/:article', function (req, res) {
  res.json(req.article);
});

module.exports = router;
