const mongo = require("../../connections/mongo");

function listWeapons(query = {}){
	return mongo.getConnection().then(db => {
		return db.collection("weapon").find(query, {"_id": 1, "uniquename": 1}).toArray()
	})
}

module.exports = listWeapons;
