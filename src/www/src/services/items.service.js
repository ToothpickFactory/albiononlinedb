angular.module('albion-server').factory('itemsService', ['$http', 'baseUrl', ($http, baseUrl) => {
		let _item;
		let _itemId;
		let _fetching;

		let getItem = (category, itemId) => {
			if(itemId === _itemId) return Promise.resolve(_item);
			if(_fetching) return _fetching;

			_itemId = itemId;
			_fetching = $http.get(`${baseUrl}/api/items/${category}/${itemId}`)
				.then(res => {
					_fetching = null;
					return _item = res.data;
				});
			return _fetching;
		}

		let searchItems = (category, query) => {
			if(_fetching) return _fetching;
			_fetching = $http.get(`${baseUrl}/api/items/${category}/`, {params: query})
				.then(res => {
					_fetching = null;
					return res.data;
				});
			return _fetching;
		}


  return { getItem, searchItems }
}]);
