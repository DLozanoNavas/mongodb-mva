// import the language driver
const MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// Connection URL
var url = 'mongodb://127.0.0.1:27017/';
// Database Name
const dbName = 'BankData';

// Use connect method to connect to the Server
MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  
  //ensure we've connected
  assert.equal(null, err);
  

  console.log("Connected correctly to server");


  //close the database connection
  return db.close();

});