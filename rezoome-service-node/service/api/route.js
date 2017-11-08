
/**
 * Router for API module. <br />
 * 
 * 
 * @since 1.0.0
 * @author TACKSU
 * @updated 171107
 */
var express = require('express');
var router = express.Router();

/**
 * Dummy.
 * 
 * @since 1.0.0
 * @author TACKSU
 * @updated 171107
 */
router.get('/api', function(req, res, next) {

});

/**
 * API to retrieve all user information. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @updated 171107
 */
router.get('/api/user', function(req, res, next){

});

/**
 * API to create new user record to db. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @updated 171107
 */
router.put('/api/user', function(req, res, next){
    
});

/**
 * API to retrieve specific user data from db. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @updated 171107
 */
router.get('/api/user/:userId', function(req, res, next){
    
});

/**
 * API to update exist specific user data. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @updated 171107
 */
router.post('/api/user/:userId', function(req, res, next){
    
});

/**
 * API to delete specific user data from db. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @updated 171107
 */
router.delete('/api/user/:userId', function(req, res, next){
    
});

module.exports = router;
