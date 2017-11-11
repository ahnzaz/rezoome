var https = require('https');
var fs = require('fs');

// TODO This would neutralize TLS certificate verification.
// Remove this code when publish.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const nexledgerServer = {

	hostname : '112.106.145.78',
	port : '18080',
	method : 'POST',
	
	headers : {
		'Content-Type' : 'application/json'
	},

	// TODO Replace valid CA certifiate.
	// ca : [fs.readFileSync('../ca/nexledger_node.cer')]
}

/**
 * Blockchain moduel to access NexLedger node interface. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @updated 171110 - created.
 */
var blockchain = {
	
	/**
	 * Retrieve record for specific user. <br />
	 * 
	 * @since 1.0.0
	 * @author TACKSU
	 * @updated 171111 - created.
	 */
	getRecord : (reqData, callback) => {
		nexledgerServer.path = '/nexledger_get_all';
	    var req = https.request(nexledgerServer, (res)=>{
	        res.on('data', (data)=>{
	        	callback(null, JSON.parse(data));
	        	});
		});
		req.on('error', (err)=>{
			callback(err, null);
		}).write(JSON.stringify(reqData));
		
		// req.end();
	}
}

module.exports = blockchain