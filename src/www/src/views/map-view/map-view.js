angular.module('albion-server').directive('mapView', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'map-view.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: ['worldService', 'mapsService', '$stateParams', 'baseUrl', 'gcsUrl', function(worldService, mapsService, $stateParams, baseUrl, gcsUrl) {
      this.mapId = $stateParams.id;
      this.baseUrl = baseUrl;
      this.gcsUrl = gcsUrl;

			worldService.get(this.mapId)
				.then(map => {
          this.map = map;
          this.map.uniquename = map.file.replace(".cluster.xml", "");
          renderCanvas()
        });

      // Canvas
      let renderCanvas = () => {
        let canvas = document.getElementById("map-canvas");
        let ctx = canvas.getContext("2d");
        let mapImg = new Image();

        mapImg.onload = () => {
          ctx.drawImage(mapImg, 0, 0, mapImg.width, mapImg.height, 0, 0, canvas.width, canvas.height);
        }

        mapImg.src = gcsUrl + '/' + this.map.uniquename + '.png';
      }


  	}]
	}
});
