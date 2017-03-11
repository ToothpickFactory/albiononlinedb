angular.module('albion-server').directive('mapView', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'map-view.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: ['mapsService', '$stateParams', 'baseUrl', function(mapsService, $stateParams, baseUrl) {
      this.mapId = $stateParams.id;
      this.baseUrl = baseUrl;

				mapsService.getMap(this.mapId)
					.then(map => this.map = map);
  	}]
	}
});
