angular.module('albion-server').directive('homePage', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'home-page.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: [function() {}]
	}
});
