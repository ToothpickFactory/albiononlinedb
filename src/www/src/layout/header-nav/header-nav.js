angular.module('albion-server').directive('headerNav', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'header-nav.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: [function() {}]
  }
});
