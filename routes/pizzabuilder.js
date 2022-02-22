var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    response.render('layout', { title: 'Welcome',template:'pizzabuilder'});
})


module.exports = router;
