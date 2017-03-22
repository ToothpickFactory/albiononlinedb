const mongo = require("../../connections/mongo");

function searchWorld(query = {}){
  query = Object.assign({}, query, {enabled: "true"});
  let fields = {
    _id: 1,
    displayname: 1
  }

  return mongo.getConnection().then(db => {
    return db.collection("world").find(query, fields).toArray()
  })
}

module.exports = searchWorld;
