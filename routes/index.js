var express = require('express');
var router = express.Router();
var pizzabuilder = require('./pizzabuilder')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Welcome',template:'index'});
});

router.use('/pizzabuilder', pizzabuilder);

module.exports = router;
