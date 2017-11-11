var express = require('express');
var router = express.Router();

var userRouter = require('./user/route.js');
router.use('/api', userRouter);

module.exports = userRouter;