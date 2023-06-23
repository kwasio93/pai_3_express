var express = require('express');
var router = express.Router();

router.get('/:imie', function(req, res, next) {
    res.send('Witam '+ req.params.imie);

 });

 module.exports = router;