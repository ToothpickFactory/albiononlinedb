angular.module('albion-server').directive('mapsView', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'maps-view.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: ['mapsService', function(mapsService) {
			this.query = {};

			this.searchMaps = (query) => {
				mapsService.searchMaps(query)
					.then(maps => this.maps = maps);
			};

  	}]
	}
});
