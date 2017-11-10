var http = require('http');
var fs = require('fs');

const nexledgerServer = {

	hostname : 'https://112.106.145.78',
	port : '18080',
	method : 'POST',
	
	headers : {
		'Content-Type' : 'application/json;charset=utf-8', 
	},

	ca : [fs.readFileSync('../../ca/nexledger_node.cer')]
}

var blockchain = {
	getRecord : (data, callback) => {
	    http.request(nexledgerServer, (response)=>{
	        response.on('data', callback);
	    });
				
	}
}

module.exports = blockchain