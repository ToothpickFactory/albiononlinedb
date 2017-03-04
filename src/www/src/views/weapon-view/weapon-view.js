angular.module('albion-server').directive('weaponView', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'weapon-view.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: ['weaponsService', '$stateParams', function(weaponsService, $stateParams) {
			if($stateParams.id){
				weaponsService.getWeapon($stateParams.id)
					.then(weapon => this.weapon = weapon);
			}
  	}]
	}
});
