var express = require('express');
var router = express.Router();

const userController= require('../controller/controller-users')

const validatorMiddleware = require('../validators/users')


/* GET users listing. */

router.get('/', userController.getList);
router.get('/:userId', userController.get);


router.post('/', validatorMiddleware.create,userController.create);
router.post('/:userId', validatorMiddleware.update, userController.update);

router.delete('/:userId', userController.deleter);

module.exports = router;
