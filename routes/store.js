var express = require('express');
var router = express.Router();

const storeController = require('../controller/controller-store')


router.get('/',storeController.get)
router.get('/:id',storeController.getList);

router.post('/',storeController.create);

router.post('/:id',storeController.update);
router.delete('/:id',storeController.deleter);

module.exports = router;