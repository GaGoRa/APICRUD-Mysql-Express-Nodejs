var express = require('express');
var router = express.Router();
const roleMiddleware = require('../Middleware/roles')
const shoppingController = require('../controller/controller-shopping.js')
const shoppingValidators = require('../validators/shoppings');


/* GET users listing. */

router.get('/',roleMiddleware.checkRole(['ADMIN','SHOPPING_MANAGER','COMERCE_MANAGER','USER']), shoppingController.getList);

router.get('/:id', roleMiddleware.checkRole(['ADMIN','SHOPPING_MANAGER','COMERCE_MANAGER','USER']),shoppingController.get);

router.post('/', roleMiddleware.checkRole(['ADMIN','SHOPPING_MANAGER']),shoppingValidators.create,shoppingController.create);

router.delete('/:id',roleMiddleware.checkRole(['ADMIN','SHOPPING_MANAGER']), shoppingController.deleter);

router.post('/:id',roleMiddleware.checkRole(['ADMIN','SHOPPING_MANAGER']),shoppingValidators.update, shoppingController.update);

module.exports = router;
