
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

// router.get('/user',  ctrl.get);
router.get('/record', ctrl.get);

router.get('/record/:phonNo', ctrl.get);

module.exports = router;