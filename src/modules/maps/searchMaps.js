const mongo = require("../../connections/mongo");

function searchMaps(query = {}){
	return mongo.getConnection()
	.then(db => {
		return db.collection("maps")
      .find(query, {"_id": 1, "name": 1, "displayname": 1})
      .toArray()
			.then(maps => {
				return maps;
			})
	})
}

module.exports = searchMaps;
