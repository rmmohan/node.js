var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('certificates', { title: 'Certificates' });
});

module.exports = router;
