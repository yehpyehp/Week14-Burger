var connection = require('./connection.js');

// ORM 
// =============================================================

var tableName = "burgers";

var orm = {

	// Here our ORM is creating a simple method for performing a query of the entire table.
	// We make use of the callback to ensure that data is returned only once the query is done.
	selectALL: function(tableName, callback){
		var s = 'SELECT * FROM ' + tableName;

		connection.query(s, function(err, result) {
	 
            callback(result);

        });
	},

	// Here our ORM is creating a simple method for performing a query of a single character in the table.
	// Again, we make use of the callback to grab a specific character from the database. 

	updateOne: function(burger, devoured, callback){
		var s = 'UPDATE quotes SET burger_name = ?, WHERE id = ?';

		connection.query(s, [req.body.burger_name, req.body.devoured, req.params.id], function (err, result) {
			if (err) throw err;
			callback(result);
		});

	},

	// Here our ORM is creating a simple method for adding characters to the database
	// Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement. 

	insertOne: function(tableName, burger, callback){

		var s = "INSERT INTO " + tableName + " (burger_name) VALUES (?)";

		connection.query(s,[burger], function(err, result) {
            
            callback(result);

        });

	}


};

module.exports = orm;