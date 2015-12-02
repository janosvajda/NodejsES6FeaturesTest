var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'username',
  password : 'passssssword',
  database : 'test_db'
});


var firstMethod = function() {
   var promise = new Promise(function(resolve, reject){
	connection.query('SELECT * FROM table WHERE id=127', function(err, rows) {
	  console.log(rows);
	  resolve({'site_rows': rows})
	});
   });
   return promise;
};
 
 
var secondMethod = function(site_rows) {
   var promise = new Promise(function(resolve, reject){
	connection.query('SELECT * FROM table2 WHERE id=1345457;', function(err, rows) {
	  console.log('SECOND',site_rows);
	  resolve({'site_setting_rows': rows})	
	});
   });
   return promise;
};
 
var thirdMethod = function(site_setting_rows) {
   var promise = new Promise(function(resolve, reject){
	console.log('THIRD',site_setting_rows);
	resolve({'OK': 1})	
   });
   return promise;
};
 
var closeConnection = function(status) {
   var promise = new Promise(function(resolve, reject){
	connection.destroy();
 	console.log('CLOSE Connection...', status);
	resolve({'OK': "quit"})
   });
   return promise;
};


firstMethod()
   .then(secondMethod)
   .then(thirdMethod)
   .then(closeConnection);