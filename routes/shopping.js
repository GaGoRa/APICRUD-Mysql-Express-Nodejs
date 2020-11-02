var express = require('express');
var router = express.Router();

const shoppingController = require('../controller/controller-shopping.js')

/* GET users listing. */

router.get('/', shoppingController.get);
router.get('/:id', shoppingController.getList);

router.post('/', shoppingController.create);

router.delete('/:id', shoppingController.deleter);
router.post('/:id', shoppingController.update);

module.exports = router;
