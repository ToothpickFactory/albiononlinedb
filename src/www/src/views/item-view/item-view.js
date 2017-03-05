angular.module('albion-server').directive('itemView', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'item-view.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: ['itemsService', '$stateParams', 'baseUrl', function(itemsService, $stateParams, baseUrl) {
      this.category = $stateParams.category;
      this.itemId = $stateParams.id;
      this.baseUrl = baseUrl;

				itemsService.getItem(this.category, this.itemId)
					.then(item => this.item = item);
  	}]
	}
});
