const WorldModule = require("../../modules/world");

// Routes
module.exports = (app) => {
  app.get('/api/world', (req, res) => {
		let query = req.query;
		WorldModule.searchWorld(query)
			.then(world => res.send(world))
			.catch(err => res.status(400).send(err));
	});

  app.get('/api/world/:id', (req, res) => {
    let id = req.params.id;
    WorldModule.getWorld(id)
      .then(world => res.send(world))
      .catch(err => res.status(400).send(err));
  });
};
