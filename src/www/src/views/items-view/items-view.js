angular.module('albion-server').directive('itemsView', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'items-view.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: ['itemsService', function(itemsService) {
			this.query = {};

			this.searchItems = (category, query) => {
				itemsService.searchItems(category.key, query)
					.then(items => this.items = items);
			};

      this.categories = [
        {
          "name": "Weapons",
          "key": "weapon",
          "shopcategories": [
            {"name": "Tools", "key": "tools"},
			      {"name": "Ranged", "key": "ranged"},
	          {"name": "Magic", "key": "magic"},
			      {"name": "Melee", "key": "melee"}
          ]
        },
        {
          "name": "Equipment",
          "key": "equipmentitem",
          "shopcategories": [
            {"name": "Offhand", "key": "offhand"},
			      {"name": "Accessories", "key": "accessories"},
	          {"name": "Armor", "key": "armor"}
          ]
        },
        {
          "name": "Consumables",
          "key": "consumableitem",
          "shopcategories": [
            {"name": "Consumables", "key": "consumables"}
          ]
        },
        {
          "name": "Farmable",
          "key": "farmableitem",
          "shopcategories": [
            {"name": "Farmables", "key": "farmables"},
            {"name": "Products", "key": "products"}
          ]
        },
        {
          "name": "Furniture",
          "key": "furnitureitem",
          "shopcategories": [
            {"name": "Furniture", "key": "furniture"},
            {"name": "Trophies", "key": "trophies"}
          ]
        },
        {
          "name": "Journal",
          "key": "journalitem",
          "shopcategories": [
            {"name": "Products", "key": "products"}
          ]
        },
        {
          "name": "Mount",
          "key": "mount",
          "shopcategories": [
            {"name": "Mounts", "key": "mounts"}
          ]
        },
        {
          "name": "Stackable",
          "key": "stackableitem",
          "shopcategories": [
            {"name": "Products", "key": "products"},
            {"name": "Other", "key": "other"},
            {"name": "Resources", "key": "resources"},
            {"name": "Artefacts", "key": "artefacts"},
            {"name": "Materials", "key": "materials"},
          ]
        }



      ];


			this.tiers = [
				{"name": "Tier 1", "key": "1"},
				{"name": "Tier 2", "key": "2"},
				{"name": "Tier 3", "key": "3"},
				{"name": "Tier 4", "key": "4"},
				{"name": "Tier 5", "key": "5"},
				{"name": "Tier 6", "key": "6"},
				{"name": "Tier 7", "key": "7"},
				{"name": "Tier 8", "key": "8"}
			];
  	}]
	}
});
