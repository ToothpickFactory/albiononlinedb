angular.module('albion-server').directive('itemView', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'item-view.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: ['itemsService', '$stateParams', 'baseUrl', 'imgUrl', function(itemsService, $stateParams, baseUrl, imgUrl) {
      this.uniquename = $stateParams.uniquename;
      this.baseUrl  = baseUrl;
      this.imgUrl   = imgUrl;

				itemsService.get(this.uniquename)
					.then(item => this.item = item);
  	}]
	}
});
