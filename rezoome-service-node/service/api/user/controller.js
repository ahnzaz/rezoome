var User = require("../../model/user");

/**
 * Controller of User API. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @update 171111
 */
 
exports.get = (req, res, next) => {
    var userId = req.params.id;
    
    if(userId){
        User.find({
            id : userId
        }, (user)=>{
            res.send(JSON.stringify(user));
        })
    }else{
        User.findall
    }
}
		
exports.put = (req, res, next) => {
    var userData = req.body;
    if(userData){
        User newUser = new User(userData);
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
                res.send(JSON.stringify(updateUser));
            })
        });
    }
}

exports.del = (req, res, next) => {
    var userData = req.body;
    if(userData){
        User.remove({
            id : userdata.id
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