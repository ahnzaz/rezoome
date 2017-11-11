var express = require('express');
var router = express.Router();

var userRouter = require('./user/route.js');
var recordRouter = require('./record/route.js');

router.use('/api', userRouter);
router.use('/api', recordRouter);

module.exports = router;