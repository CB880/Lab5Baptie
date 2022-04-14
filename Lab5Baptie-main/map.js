L.mapbox.accessToken = 'pk.eyJ1IjoiY2JhcHRpZSIsImEiOiJja3p3NG1naTkxYXNqMzBwazl3dmoxejAyIn0.Pbl19lXTMNW-Qei_7auoJA';
var map = L.map('map').setView([51.0447, -114.0719], 11);

L.tileLayer(
    'https://api.mapbox.com/styles/cbaptie/ckzw6nz3p00bm14qtupu5ju1y/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

var drawnpolyline= new L.featuregroup();
map.addLayer(drawnpolyline)

var drawControl= new L.Control.Draw({
edit: {
  featuregroup: drawnpolyline
}
});
map.addControl(drawControl);
map.on('draw:created', function (e){
  var type = e.layerType,
  layer= e.layer;
  if (type === 'marker') {
    layer.bindPopup('Mark');
  }
  drawnpolyline.addLayer(layer)
});

var drawnlines = new L.geoJSON().addTo(map);
var Line, simplified;

map.on('draw:created', function(e){
  let type = e.layerType, layer= e.layer;
  Line = e.layer.toGeoJSON();
  drawnpolyline.addLayer(layer)
});
