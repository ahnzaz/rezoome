
/**
 * Router for API module. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @updated 171107
 */
var express = require('express');
var router = express.Router();
var ctrl = require('./controller');

router.get('/user',  ctrl.get);

router.get('/user/:id', ctrl.get);

router.put('/user', ctrl.put);

router.post('/user/:id', ctrl.set);

router.delete('/user/:id', ctrl.del);

module.exports = router;