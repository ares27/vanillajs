let view, point;


require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
  ], function(Map, MapView, Graphic, GraphicsLayer) {

  var map = new Map({
    basemap: "topo-vector"
  });

  view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-118.80500, 34.02700], // longitude, latitude
    zoom: 13
  });


  point = {
    type: "point",
    longitude: "",
    latitude: ""
  };

  var simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40],  // orange
    outline: {
      color: [255, 255, 255], // white
      width: 1
    }
  };

  var pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol
  });

  var graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  graphicsLayer.add(pointGraphic);



});