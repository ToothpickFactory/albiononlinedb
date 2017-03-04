const mongo = require("../../connections/mongo");

function getWeapon(_id){
	return mongo.getConnection().then(db => {
		return db.collection("weapon").findOne({"_id": mongo.ObjectID(_id)})
	})
}

module.exports = getWeapon;
