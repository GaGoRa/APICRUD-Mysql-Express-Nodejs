var express = require('express');
var router = express.Router();

const indexController = require('../controller/controller-index')

/* GET home page. */
router.get('/', indexController.get);

module.exports = router;
