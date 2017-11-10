
/**
 * Router for API module. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @updated 171107
 */
var express = require('express');
var router = express.Router();
var userController = require('./controller');

router.get('/user',  userController.get);

router.get('/user/:userId', userController.get);

router.put('/user', userController.put);

router.post('/user/:userId', userController.set);

router.delete('/user/:userId', userController.del);

module.exports = router;