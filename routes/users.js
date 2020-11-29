var express = require('express');
var router = express.Router();
const userController= require('../controller/controller-users')
const validatorMiddleware = require('../validators/users')
const roleMiddleware = require('../Middleware/roles')
const authMiddleware = require('../Middleware/auth')


/* GET users listing. */

router.get('/',authMiddleware.authenticate,roleMiddleware.checkRole(['ADMIN']),userController.getList);
router.get('/:userId',authMiddleware.authenticate,roleMiddleware.checkRole(['ADMIN']), userController.get);

router.post('/',validatorMiddleware.create,userController.create);

router.post('/:userId',authMiddleware.authenticate,roleMiddleware.checkRole( ['ADMIN']), validatorMiddleware.update, userController.update);

router.delete('/:userId',authMiddleware.authenticate,roleMiddleware.checkRole( ['ADMIN']), userController.deleter);

module.exports = router;
