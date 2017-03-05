angular.module('albion-server').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
		// Home Page
    .state('home', {
      url: '/home',
      template: '<home-page></home-page>'
    })
		// Items Page
    .state('items', {
      url: '/items',
      template: '<items-page></items-page>'
    })
		.state('items.item', {
      url: '/:category/:id',
      template: '<item-view></item-view>'
    })
  $urlRouterProvider.otherwise('/home');

}]);
