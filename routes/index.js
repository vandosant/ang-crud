var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = mongoose.model('Article');
var Automobile = mongoose.model('Automobile');
var Color = mongoose.model('Color');

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

router.put('/articles/:article', function (req, res) {
  req.article.update(req.body);
  res.json(req.article);
});

router.delete('/articles/:article', function (req, res) {
  req.article.destroy();
  res.json(req.article);
});

router.param('automobile', function (req, res, next, id) {
  var query = Automobile.findById(id);

  query.exec(function (err, automobile) {
    if (err) {
      return next(err);
    }
    if (!automobile) {
      return next(new Error('automobile not found'));
    }

    req.automobile = automobile;
    return next();
  })
});

router.post('/automobiles', function (req, res) {
  var automobile = new Automobile(req.body);
  automobile.save(function (err, automobile) {
    if (err) {
      return next(err);
    }
    res.json(automobile);
  })
});

router.get('/automobiles', function (req, res) {
  Automobile.find(function (err, automobiles) {
    if (err) {
      return next(err);
    }
    res.json(automobiles);
  })
});

router.get('/automobiles/:automobile', function (req, res) {
  res.json(req.automobile);
});

router.put('/automobiles/:automobile', function (req, res) {
  req.automobile.update(req.body);
  res.json(req.automobile);
});

router.delete('/automobiles/:automobile', function (req, res) {
  req.automobile.destroy();
  res.json(req.automobile);
});

router.post('/colors', function (req, res) {
  var color = new Color(req.body);
  color.save(function (err, color){
    if (err){
      return next(err);
    }
    res.json(color);
  })
});
module.exports = router;
