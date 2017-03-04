angular.module('albion-server').factory('weaponsService', ['$http', 'baseUrl', ($http, baseUrl) => {
		let _weapon;
		let _weaponId;
		let _fetching;

		let getWeapon = (weaponId) => {
			if(weaponId === _weaponId) return Promise.resolve(_weapon);
			if(_fetching) return _fetching;

			_weaponId = weaponId;
			_fetching = $http.get(`${baseUrl}/api/weapons/${weaponId}`)
				.then(res => {
					_fetching = null;
					return _weapon = res.data;
				});
			return _fetching;
		}

		let getWeapons = (query) => {
			if(_fetching) return _fetching;
			_fetching = $http.get(`${baseUrl}/api/weapons/`, {params: query})
				.then(res => {
					_fetching = null;
					return res.data;
				});
			return _fetching;
		}


  return { getWeapon, getWeapons }
}]);
