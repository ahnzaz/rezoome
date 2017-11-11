
var assert = require('assert');
var blockchain = require('../module/blockchain/blockchain');
var fs = require('fs');
var mlog = require('mocha-logger');

var https = require('https');
const option = {
	agent : false,
	hostname : '112.106.145.78',
	port : '18080',
	method : 'POST',
	
	headers : {
		'Content-Type' : 'application/json'
	},

	ca : [fs.readFileSync('../ca/nexledger_node.cer')]
}

describe('Blockchain IO Test', function(){

	it('Basic https request', function(done){
		https.request(option, function(res){
			mlog.log('status: ', res.statusCode);
			mlog.log('headers: ', res.headers);
			res.on('data', function(data){
				mlog.log('data');
				done();
			});
		})
	})
	
	// it('OPIc record IO', function(done){
	// 	blockchain.getRecord({
	// 		'phoneNumber' : '010-4564-8787'
	// 	}, (data)=>{
	// 		mlog.log(data);
	// 		console.log(data.toString());
	// 	})
	// });
});