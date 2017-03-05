var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('casestudies', { title: 'Case Studies' });
});

module.exports = router;
