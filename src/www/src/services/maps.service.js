angular.module('albion-server').factory('mapsService', ['$http', 'baseUrl', ($http, baseUrl) => {
		let _map;
		let _mapId;
		let _fetching;

		let getMap = (mapId) => {
			if(mapId === _mapId) return Promise.resolve(_item);
			if(_fetching) return _fetching;

			_mapId = mapId;
			_fetching = $http.get(`${baseUrl}/api/maps/${mapId}`)
				.then(res => {
					_fetching = null;
					return _map = res.data;
				});
			return _fetching;
		}

		let searchMaps = (query) => {
			if(_fetching) return _fetching;
			_fetching = $http.get(`${baseUrl}/api/maps/`, {params: query})
				.then(res => {
					_fetching = null;
					return res.data;
				});
			return _fetching;
		}


  return { getMap, searchMaps }
}]);
