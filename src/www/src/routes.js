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
      url: '/:uniquename',
      template: '<item-view></item-view>'
    })
    // Maps Page
    .state('maps', {
      url: '/maps',
      template: '<maps-page></maps-page>'
    })
		.state('maps.map', {
      url: '/:id',
      template: '<map-view></map-view>'
    })
  $urlRouterProvider.otherwise('/home');

}]);
