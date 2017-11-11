
var assert = require('assert');
var blockchain = require('../module/blockchain/blockchain');
var fs = require('fs');
var mlog = require('mocha-logger');

var http = require('http');
var https = require('https');
const option = {
	agent : false,
	hostname : '112.106.145.78',
	port : '18080',
	method : 'POST',
	path : '/nexledger_get_all',
	
	headers : {
		'Content-Type' : 'application/json'
	},

	// ca : [fs.readFileSync('../ca/nexledger_node.cer')]
}

describe('Blockchain IO Test', function(){

	it('Basic https request', function(done){
		process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
		var req = https.request(option, function(res){
			mlog.log('status: ', res.statusCode);
			mlog.log('headers: ', res.headers);
			res.on('data', function(data){
				mlog.log('data:', data);
				done();
			});
		}).on('error', function(err){
			mlog.error(err.toString());
		});
		req.write(JSON.stringify({
			'phoneNumber' : '010-4564-8787'
		}));
		
		req.end();
	})
	
	it('OPIc record IO', function(done){
		blockchain.getRecord({
			'phoneNumber' : '010-4564-8787'
		}, (err, data)=>{
			if(err)
				mlog.error(err);
			else
				mlog.log(data);
			done();
		})
	});
});