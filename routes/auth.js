const router = require('express').Router();
const controllerLogin = require('../controller/controller-auth')

router.post('/login',controllerLogin.login);

module.exports = router;
