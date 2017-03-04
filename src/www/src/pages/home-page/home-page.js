angular.module('albion-server').directive('homePage', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'home-page.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: ['weaponsService', function(weaponsService) {
			this.query = {};

			this.getWeapons = (query) => {
				weaponsService.getWeapons(query)
					.then(weapons => this.weapons = weapons);
			};

			this.shopcategorys = [
				{"key": "Tools", "name": "tools"},
				{"key": "Ranged", "name": "ranged"},
				{"key": "Magic", "name": "magic"},
				{"key": "Melee", "name": "melee"}
			];

			this.tiers = [
				{"key": "Tier 1", "name": "1"},
				{"key": "Tier 2", "name": "2"},
				{"key": "Tier 3", "name": "3"},
				{"key": "Tier 4", "name": "4"},
				{"key": "Tier 5", "name": "5"},
				{"key": "Tier 6", "name": "6"},
				{"key": "Tier 7", "name": "7"},
				{"key": "Tier 8", "name": "8"}
			];
  	}]
	}
});
