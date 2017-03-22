const mongo = require("../../connections/mongo");

function searchItems(query = {}){
	return mongo.getConnection().then(db => {
		return db.collection("items").find(query, {"uniquename": 1}).toArray()
	})
}

module.exports = searchItems;
