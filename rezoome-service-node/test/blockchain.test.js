
var assert = require('assert');
var blockchain = require('../module/blockchain/blockchain');

describe('Blockchain IO Test', function(){

	it('OPIc record IO', function(done){
		blockchain.getRecord({
			'phoneNo' : '010-1234-1234'
		}, (data)=>{
			console.log(data.toString());
		})
	});
});