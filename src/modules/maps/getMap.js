const mongo = require("../../connections/mongo");

function getMap(uid){
	return mongo.getConnection().then(db => {
		return db.collection("maps").findOne({"uniquename": uid})
	})
}

module.exports = getMap;
