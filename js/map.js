$(document).ready(function () {
  // var map = L.map('map').setView([27.7, 85.4], 7);
  var map = L.map('map', {
    // layers: [base],
    center: new L.LatLng(-24.726874870506972, 137.19726562500003),
    zoom: 5,
  });
  map.on('click', function () {
    console.log(map.getCenter());
  });
  console.log(map);
  osm = L.tileLayer(
    'https://api.mapbox.com/styles/v1/nishon-naxa/ckgkuy7y08rpi19qk46sces9c/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibmlzaG9uLW5heGEiLCJhIjoiY2s5Nzl3MnoyMDQ5ZzNscHJ0eTZvOHBrcCJ9.JL4lV84Jv8Wi1cYNhJilPA',
    {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }
  ).addTo(map);

  googleStreets = L.tileLayer(
    'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }
  );
  googleHybrid = L.tileLayer(
    'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
    {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }
  );
  googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  });
  googleTerrain = L.tileLayer(
    'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
    {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }
  );
  // var markerIcon = [
  // 	["Kritipur",27.67988,85.27544],
  // 	["Pokhara",28.26689,83.96851],
  // 	["Waling",27.98333,83.76667],
  // 	["Banepa",27.62979,85.52138],
  // 	["Butwal",27.70055,83.44836],
  // 	];

  // 	for (var i = 0; i < markerIcon.length; i++) {
  // 		marker = new L.marker([markerIcon[i][1],markerIcon[i][2]])
  // 			.bindPopup(markerIcon[i][0])
  // 			.addTo(map);
  // 	}

  var baseLayers = {
    OpenStreetMap: osm,
    'Google Streets': googleStreets,
    'Google Hybrid': googleHybrid,
    'Google Satellite': googleSat,
    'Google Terrain': googleTerrain,
  };

  // var latLong = [{
  // 	"lat": 27.67988,
  // 	"lng": 85.27544
  //   }, {
  // 	"lat": 28.26689,
  // 	"lng": 83.96851
  //   }, {
  // 	"lat": 27.98333,
  // 	"lng": 83.76667
  //   }, {
  // 	"lat": 27.62979,
  // 	"lng": 85.52138
  //   }, {
  // 	"lat": 27.70055,
  // 	"lng": 83.44836
  //   }];
  customPopup =
    '<div class="map-popup-wrapper"> <h5 class="primary-300 is-capitalize">data 1</h5><ul class="content-list "><li class="is-flex is-start"><p>Grid No.</p><strong>201</strong></li><li class="is-flex is-start"><p>WGS84 (X,Y,Z)</p><strong>-469195.5</strong></li><li class="is-flex is-start"><p>MUTM (X,Y,Z)</p><strong>Yes</strong></li><li class="is-flex is-start"><p>LCC (X,Y,Z)</p><strong>1</strong></li><li class="is-flex is-start"><p>Province</p><strong>bagmati</strong></li></ul><div class="map-popup-footer buttons is-flex is-center mt-15"><button class="is-button is-clear is-icon is-primary"><span>view more</span><i class="material-icons>chevron_right</i></button></div></div>';
  var customOptions = {
    popupAnchor: [-10, -10],
    maxWidth: '300',
    width: '300',
    className: 'popupCustom',
  };
  var Kritipur = L.circle([-23.971318, 140.989753], {
    color: '#047c41',
    fillColor: '#047c41',
    fillOpacity: 0.7,
    radius: 29000,
  }).addTo(map);

  Kritipur.bindPopup(customPopup, customOptions).openPopup();
  Kritipur.on('click', function () {
    console.log('click');
    map.setView([-23.971318, 140.989753], 7);
    // map.setZoom(10);
    // Kritipur.
  });
  var pokhara = L.circle([-24.915282, 127.699126], {
    color: '#047c41',
    fillColor: '#047c41',
    fillOpacity: 0.7,
    radius: 29000,
  }).addTo(map);

  pokhara.bindPopup(customPopup, customOptions);
  pokhara.on('click', function () {
    // console.log('click');
    map.setView([-24.915282, 127.699126], 7);
    // Kritipur.
  });
  var butwal = L.circle([-30.048877, 120.977126], {
    color: '#047c41',
    fillColor: '#047c41',
    fillOpacity: 0.7,
    radius: 29000,
  }).addTo(map);

  butwal.bindPopup(customPopup, customOptions);
  butwal.on('click', function () {
    // console.log('click');
    map.setView([-30.048877, 120.977126], 7);
    // Kritipur.
  });
  var waling = L.circle([-21.726874870506972, 137.19726562500003], {
    color: '#047c41',
    fillColor: '#047c41',
    fillOpacity: 0.7,
    radius: 29000,
  }).addTo(map);

  waling.bindPopup(customPopup, customOptions);
  waling.on('click', function () {
    // console.log('click');
    map.setView([-21.726874870506972, 137.19726562500003], 7);
    // Kritipur.
  });
  // var banepa = L.circle([27.62979, 85.52138], {
  // 	color: '#047c41',
  // 	fillColor: '#047c41',
  // 	fillOpacity: 0.7,
  // 	radius: 400
  // }).addTo(map);

  // banepa.bindPopup(customPopup,customOptions);
  // latLong.forEach(function(feature) {
  // 	var circle = L.circle(feature, {
  // 	  color: 'red',
  // 	  fillColor: '#f03',
  // 	  fillOpacity: 0.5,
  // 	  radius: 5000
  // 	}).addTo(map);
  //   });

  //   myMap.panTo([2, 22]);

  layerswitcher = L.control
    .layers(baseLayers, {}, { collapsed: true })
    .addTo(map);
});

$('.leaflet-popup-content, .leaflet-popup-content-wrapper').css(
  'width',
  '300px'
);
