var http = require('http');

const nexledgerServer = {

	hostname : 'https://112.106.145.78',
	port : '18080',
	method : 'POST',
	
	headers : {
		'Content-Type' : 'application/json;charset=utf-8', 
	}
}

var blockchain = {
	getRecord : (data, callback) => {
	    http.request(nexledgerServer, (response)=>{
	        response.on('data', callback);
	    });
				
	}
}

module.exports = blockchain