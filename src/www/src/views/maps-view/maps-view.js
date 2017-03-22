angular.module('albion-server').directive('mapsView', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'maps-view.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: ['worldService', '$state', '$stateParams', function(worldService, $state, $stateParams) {
      this.$state = $state;
      this.mapId = $stateParams.id;

      worldService.search({})
				.then(world => this.world = world);
  	}]
	}
});
