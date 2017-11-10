var https = require('https');
var fs = require('fs');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const nexledgerServer = {

	hostname : '112.106.145.78',
	port : '18080',
	method : 'POST',
	
	headers : {
		'Content-Type' : 'application/json'
	},

	ca : [fs.readFileSync('../ca/nexledger_node.cer')]
}

var blockchain = {
	getRecord : (data, callback) => {
	    var req = https.request(nexledgerServer, (response)=>{
	        response.on('data', callback);
		});
		
		req.write(JSON.stringify(data));
	}
}

module.exports = blockchain