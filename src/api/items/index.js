const ItemsModule = require("../../modules/items");

// Routes
module.exports = (app) => {
  app.get('/api/items/:collection', (req, res) => {
		let query = req.query;
    let collection = req.params.collection;
		ItemsModule.searchItems(collection, query)
			.then(items => res.send(items))
			.catch(err => res.status(400).send(err));
	});

	app.get('/api/items/:collection/:id', (req, res) => {
		let id = req.params.id;
    let collection = req.params.collection;
		ItemsModule.getItem(collection, id)
			.then(item => res.send(item))
			.catch(err => res.status(400).send(err));
	});
};
