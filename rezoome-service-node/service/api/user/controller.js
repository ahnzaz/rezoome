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
        User.findById(userId, (err, user)=>{
            res.render(JSON.stringify(user, null, 2));
        })
    }else{
        User.find({}).exec((err, docs)=>{
            console.log("All user : ", err);
            res.render(JSON.stringify(docs, null, 2));
        })
        
    }
}
		
exports.put = (req, res, next) => {
    var userData = req.body;
    if(userData){
        var newUser = new User(userData);
        newUser.save((insertedUser)=>{
            res.render(JSON.stringify(insertedUser, null, 2));
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
                res.render(JSON.stringify(updatedUser, null, 2));
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
                res.render(JSON.stringify({
                    'result' : true
                }, null, 2));
        })
    }
}