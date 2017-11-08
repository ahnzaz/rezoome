
var Model = require('./model');

/**
 * Entity for User. <br />
 * 
 * Declaration
 * {
 * 		'_id'		: String,
 * 		'name'		: String,
 * 		'phoneNo'	: String
 * 		'records'	: [
 * 			Record, ...
 * 		]
 * }
 * @since 1.0.0
 * @author TACKSU
 */
class User extends Model{
	constructor(_id, name){
		super();
		this._id = _id;
		this.name = name;
	}
	
	addRecord(record){
		this.records.push(record);
	}
}

module.exports = User;