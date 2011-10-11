var mongo = require('mongodb');

var CONNECTION_URL = 'mongodb://user:pass@host:port/db_name';

mongo.connect(CONNECTION_URL, function(err, db) {

});
