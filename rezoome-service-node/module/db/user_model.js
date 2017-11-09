var mongoose = require('./mongodb_adapter');
var Schema = mongoose.Schema;

var Record = require('./record_model.js');

var UserSchema = new Schema({
    name : String,
    phoneNo : String,
    records  : [],
    birthday : Date
});

UserSchema.methods.addRecord = function(record){
    this.records.push(record);
}

module.exports = mongoose.model('User', UserSchema);