class User extends Model{
	constructor(_id, name){
		this._id = _id;
		this.name = name;
	}
	
	get certificate(){
		return this.certificates;
	})
	
	addCert(cert){
		this.certificates.add(cert);
	})
	
	set phoneNo(phone){
		this.phoneNo = phone;
	}
}