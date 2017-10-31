var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Root",
	database: "burgers_db"
});

connection.connect(function(err){
	if(err){
		console.errror("error connection: " + err.stack);
		return;
	}
	console.log("connected as id" + connection.threadId);
});

module.exports = connection;