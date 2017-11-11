var express = require('express');
var router = express.Router();

var userRouter = require('./user/route.js');
router.use('/', userRouter);

router.get('/', (req, res, next)=>{
    console.log('api route test');
    next(req, res);
})

module.exports = router;