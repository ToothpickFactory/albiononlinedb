const ItemsModule = require("../../modules/items");

// Routes
module.exports = (app) => {
  app.get('/api/items', (req, res) => {
		let query = req.query;
    let collection = req.params.collection;
		ItemsModule.searchItems(query)
			.then(items => res.send(items))
			.catch(err => res.status(400).send(err));
	});

	app.get('/api/items/:uniquename', (req, res) => {
		let uniquename = req.params.uniquename;
		ItemsModule.getItem(uniquename)
			.then(item => res.send(item))
			.catch(err => res.status(400).send(err));
	});
};
