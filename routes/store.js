var express = require('express');
var router = express.Router();

const storeController = require('../controller/controller-store')
const roleMiddleware = require('../Middleware/roles');
const validatorStore = require('../validators/store')

router.get('/:id',roleMiddleware.checkRole(['ADMIN','SHOPPING_MANAGER','COMERCE_MANAGER','USER']),storeController.get)

router.get('/',roleMiddleware.checkRole(['ADMIN','SHOPPING_MANAGER','COMERCE_MANAGER','USER']),storeController.getList);

router.post('/',roleMiddleware.checkRole(['ADMIN','COMERCE_MANAGER']
),validatorStore.create,storeController.create);

router.post('/:id',roleMiddleware.checkRole(['ADMIN','COMERCE_MANAGER']),validatorStore.update,storeController.update);

router.delete('/:id',roleMiddleware.checkRole(['ADMIN','COMERCE_MANAGER']),storeController.deleter);

module.exports = router