angular.module('albion-server').factory('itemsService', ['$http', 'baseUrl', ($http, baseUrl) => {
		let get = (itemId) => {
			return $http.get(`${baseUrl}/api/items/${itemId}`)
				.then(res => res.data);
		}

		let search = (query) => {
			return $http.get(`${baseUrl}/api/items`, {params: query})
				.then(res => res.data);
		}


  return { get, search }
}]);
