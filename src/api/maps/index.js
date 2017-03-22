const MapsModule = require("../../modules/maps");

// Routes
module.exports = (app) => {
  app.get('/api/maps', (req, res) => {
		let query = req.query;
		MapsModule.searchMaps(query)
			.then(maps => res.send(maps))
			.catch(err => res.status(400).send(err));
	});

	app.get('/api/maps/:uid', (req, res) => {
		let uid = req.params.uid;
		MapsModule.getMap(uid)
			.then(map => res.send(map))
			.catch(err => res.status(400).send(err));
	});
};
