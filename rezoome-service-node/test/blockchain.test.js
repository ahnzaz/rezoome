
var assert = require('assert');
var blockchain = require('../module/blockchain/blockchain');

describe('Blockchain IO Test', function(){

	it('OPIc record IO', function(done){
		blockchain.getRecord({
			'phoneNo' : '010-1234-1234'
		}, function(err, data){
			for(var record : data){
				assert.equal('010-1234-1234', record.phoneNo);
				done();
			}
		})
	}))
}));