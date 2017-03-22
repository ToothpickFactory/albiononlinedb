angular.module('albion-server').directive('itemsView', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'items-view.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: ['itemsService', '$state', function(itemsService, $state) {
			this.query = {};

      this.$state = $state;

			this.searchItems = (query) => {
				itemsService.search(query)
					.then(items => this.items = items);
			};

      this.shopcategories = [
        {"name": "Tools", "key": "tools"},
        {"name": "Ranged", "key": "ranged"},
        {"name": "Magic", "key": "magic"},
        {"name": "Melee", "key": "melee"},
        {"name": "Offhand", "key": "offhand"},
        {"name": "Accessories", "key": "accessories"},
        {"name": "Armor", "key": "armor"},
        {"name": "Consumables", "key": "consumables"},
        {"name": "Farmables", "key": "farmables"},
        {"name": "Products", "key": "products"},
        {"name": "Furniture", "key": "furniture"},
        {"name": "Trophies", "key": "trophies"},
        {"name": "Products", "key": "products"},
        {"name": "Mounts", "key": "mounts"},
        {"name": "Products", "key": "products"},
        {"name": "Other", "key": "other"},
        {"name": "Resources", "key": "resources"},
        {"name": "Artefacts", "key": "artefacts"},
        {"name": "Materials", "key": "materials"}
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
