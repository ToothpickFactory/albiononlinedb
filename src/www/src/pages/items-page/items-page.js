angular.module('albion-server').directive('itemsPage', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'items-page.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: [function() {}]
	}
});
