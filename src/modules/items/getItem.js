const mongo = require("../../connections/mongo");

function getItem(collection, _id){
	return mongo.getConnection().then(db => {
		return db.collection(collection).findOne({"_id": mongo.ObjectID(_id)})
	})
}

module.exports = getItem;
