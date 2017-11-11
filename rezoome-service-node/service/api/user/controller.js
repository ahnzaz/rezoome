var User = require("../../../module/db/user_model");

/**
 * Controller of User API. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @update 171111
 */
 
exports.get = (req, res, next) => {
    console.log('USER Controller test');
    var userId = req.params.id;
    
    if(userId){
        User.find({
            id : userId
        }, (user)=>{
            res.send(JSON.stringify(user));
        })
    }else{
        User.find({}).exec((err, docs)=>{
            console.log("All user : ", err);
            res.send(JSON.stringify(docs));
        })
        
    }
}
		
exports.put = (req, res, next) => {
    var userData = req.body;
    if(userData){
        var newUser = new User(userData);
        newUser.save((insertedUser)=>{
            res.send(JSON.stringify(insertedUser));
        })
    }
}
		
exports.set = (req, res, next) =>{
    var userData = req.body;
    if(userData){
        User.find({
            id : userData.id
        }, (user)=>{
            user = userData;
            user.save((updatedUser)=>{
                res.send(JSON.stringify(updatedUser));
            })
        });
    }
}

exports.del = (req, res, next) => {
    var userData = req.body;
    if(userData){
        User.remove({
            id : userData.id
        }, (err)=>{
            if(err)
                console.error(err);
            else
                res.send(JSON.stringify({
                    'result' : true
                }))
        })
    }
}