var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Data = mongoose.model('Data');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {title: 'Express'});
});


router.get('/datas', function (reg, res) {
  Data.find(function (err, datas) {
    if (err) {
      return next(err);
    }
    res.json(datas);
  })
});

router.post('/datas', function (req, res) {
  var data = new Data(req.body);
  data.save(function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data)
  });
});

module.exports = router;
