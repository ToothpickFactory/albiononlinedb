const mongo = require("../../connections/mongo");

function searchItems(collection, query = {}){
	return mongo.getConnection().then(db => {
		return db.collection(collection).find(query, {"_id": 1, "uniquename": 1}).toArray()
	})
}

module.exports = searchItems;
