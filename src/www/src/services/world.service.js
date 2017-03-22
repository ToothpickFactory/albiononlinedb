angular.module('albion-server').factory('worldService', ['$http', 'baseUrl', ($http, baseUrl) => {
	let get = (id) => {
		return $http.get(`${baseUrl}/api/world/${id}`)
			.then(res => res.data);
	}

	let search = (query) => {
		return $http.get(`${baseUrl}/api/world/`, {params: query})
			.then(res => res.data);
	}

  return { get, search }
}]);
