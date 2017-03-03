var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Home' });
});

router.get('/vr', function(req, res, next) {
  res.render('home/vr', { title: 'VR Room' });
});

module.exports = router;
