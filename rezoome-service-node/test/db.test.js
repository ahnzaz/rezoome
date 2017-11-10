/**
 * Unit test cases for db crud. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @updated 171109 - created.
 */
var assert = require('assert');

var mongoose = require('mongoose');
var User = require('../module/db/user_model');
var Record = require('../module/db/record_model');

describe('User DB Test', ()=>{
it('Create user', (done)=>{
    var myUser = new User({
        name : 'Jackson',
        phoneNo : '010-4545-8787'
    });
    
    myUser.save().then((user)=>{
        assert.equal(myUser.name, user.name);
        assert.equal(myUser.phoneNo, user.phoneNo);
        done();
    });
});

it('Delete User', ()=>{
    var myUser = new User({
        name : 'Patrik Jane',
        phoneNo : '0108-484645'
    });

    return myUser.save().then((user)=>{
        assert.equal(user.name, myUser.name);
        assert.equal(user.phoneNo, myUser.phoneNo);

        user.remove().then((removedUser)=>{
            assert(user.name, "ASDFASDF");
        });
    })
});
});

describe('User add record', ()=>{
    it('Add a record to user', (done)=>{
    var myUser = new User({
        name : 'MName',
        phoneNo : '1019654654'
    });

    myUser.addRecord(new Record({
        type : 'Opic',
        grade : 'IH',
        date : Date.now()
    }))

    myUser.save().then((user)=>{
        assert(user.records[0].type, 'Opic');
        assert(user.records[0].grade, 'IH');
        done();
    })
    });
})

describe('Test', function(){
    it('Hi!', function(){
        assert.equal(0, 0);
    });
});