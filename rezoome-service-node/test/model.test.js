/**
 * Unit test cases for plain entity classes.
 */
 var assert = require('assert');

 var User = require('../model/user.js');
 var OPIc = require('../model/record/opic/opic.js');

 describe('User model Test', function(){
    it('Create user', function(){
        var myUser = new User('asdfasdf', 'Hello');
        assert.equal(myUser._id, 'asdfasdf');
        assert.equal(myUser.name, 'Hello');
    });

    it('Add record to User', function(){
        var myUser = new User('asdfasdf', 'hello');
    });
 });

 describe('OPIc record test', function(){
     it('Create OPIc', function(){
         var myOpic = new OPIc('010-6454-5483', 'IH', new Date());
         assert.equal(myOpic.phoneNo, '010-6454-5483');
         assert.equal(myOpic.grade, 'IH');
     })
     
     it('OPIc grade miss', function(){
        assert.throws(new OPIc('010-6454-5483', 'ASD', new Date()), Error);
     })
 })