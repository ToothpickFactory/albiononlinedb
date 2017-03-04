const config = require('config');
const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;

let _db;

function setup(){
  return mongodb.MongoClient.connect(config.mongo.uri, {})
    .then(db => {
      _db = db;
      console.log(`Connect to ${config.mongo.uri}`);
      return _db;
    })
    .catch(err => console.log(err))
}

function getConnection(){
  return _db ? Promise.resolve(_db) : setup();
}


module.exports = {setup, getConnection, ObjectID};
