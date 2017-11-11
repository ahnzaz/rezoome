var Record = require("../../../module/db/record_model");
var blockchain = require('../../../module/blockchain/blockchain');

/**
 * Controller of User API. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @update 171111
 */
 
exports.get = (req, res, next) => {
    console.log('Record Controller test');
    var phoneNo = req.params.phonNo;
    
    if(phoneNo){
        blockchain.getRecord({
            phoneNumber : phoneNo
        }, (err, data)=>{
            res.send(JSON.stringify(data, null, 4));
        })
    }else{
        blockchain.getRecord({
            phoneNumber : null
        }, (err, data)=>{
            res.send(JSON.stringify(data, null, 4));
        })
    }
}