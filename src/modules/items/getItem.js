const mongo = require("../../connections/mongo");

function getItem(uniquename){
	return mongo.getConnection().then(db => {
		return db.collection("items").findOne({uniquename})
	})
}

module.exports = getItem;
