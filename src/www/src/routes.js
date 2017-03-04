angular.module('albion-server').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
		// Home Page
    .state('home', {
      url: '/home',
      template: '<home-page></home-page>'
    })
		// Weapons Page
    .state('weapons', {
      url: '/weapons',
      template: '<weapons-page></weapons-page>'
    })
		.state('weapons.weapon', {
      url: '/:id',
      template: '<weapon-view></weapon-view>'
    })
  $urlRouterProvider.otherwise('/home');

}]);
