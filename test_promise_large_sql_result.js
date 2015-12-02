var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'username',
  password : 'passssssword',
  database : 'test_db'
});

var firstMethod = function() {
   var promise = new Promise(function(resolve, reject){

    var query = connection.query('SELECT * FROM largetable LIMIT 0,500');
    query
      .on('error', function(err) {
        console.log('ERROR:',err);
      })
      .on('fields', function(fields) {
            console.log('FIELDS:',fields);
      })
      .on('result', function(row) {
          console.log('ROW', row)
      })
      .on('end', function() {
            console.log('END large SQL query');
            resolve({'END_BIG_QUERY': true })
      });	
    });
    return promise;
    };
 
 
var secondMethod = function(big_query_status) {
   var promise = new Promise(function(resolve, reject){
    connection.query('SELECT * FROM site_settings WHERE site_id=123456;', function(err, rows) {
      console.log('big_query_status',big_query_status);
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
   .then(closeConnection)
   .then();