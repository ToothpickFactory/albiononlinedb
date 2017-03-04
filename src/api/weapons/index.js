const WeaponsModule = require("../../modules/weapons");

// Routes
module.exports = (app) => {
  app.get('/api/weapons', (req, res) => {
		let query = req.query;
		WeaponsModule.listWeapons(query)
			.then(weapons => res.send(weapons))
			.catch(err => res.status(400).send(err));
	});

	app.get('/api/weapons/:id', (req, res) => {
		let id = req.params.id;
		WeaponsModule.getWeapon(id)
			.then(weapon => res.send(weapon))
			.catch(err => res.status(400).send(err));
	});
};
