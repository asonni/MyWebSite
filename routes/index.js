var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'MyWebSite' });
});

router.get('/bootstrap-elements', function(req, res) {
  res.render('bootstrap-elements', { title: 'bootstrap-elements' });
});

module.exports = router;
