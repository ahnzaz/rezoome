var mongoose = require('./mongodb_adapter');
var Schema = mongoose.Schema;

/**
 * Schema for RecordEntity. <br />
 */
var RecordSchema = new Schema({
    type    : String,
    date    : String,
    grade   : String
});

module.exports = mongoose.model('Record', RecordSchema);