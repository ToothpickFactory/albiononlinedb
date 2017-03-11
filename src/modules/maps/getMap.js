const mongo = require("../../connections/mongo");

function getMap(_id){
	return mongo.getConnection().then(db => {
		return db.collection("maps").findOne({"_id": mongo.ObjectID(_id)})
	})
}

module.exports = getMap;
