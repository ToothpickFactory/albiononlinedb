const mongo = require("../../connections/mongo");

function getWorld(_id){
	return mongo.getConnection().then(db => {
		return db.collection("world").findOne({"_id": mongo.ObjectID(_id)})
	})
}

module.exports = getWorld;
