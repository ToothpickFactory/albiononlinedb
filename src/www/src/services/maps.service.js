angular.module('albion-server').factory('mapsService', ['$http', 'baseUrl', ($http, baseUrl) => {
		let get = (id) => {
			return $http.get(`${baseUrl}/api/maps/${mapId}`)
				.then(res => res.data);
		}

		let search = (query) => {
			return $http.get(`${baseUrl}/api/maps/`, {params: query})
				.then(res => res.data);
		}

  return { get, search }
}]);
