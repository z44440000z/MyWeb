function googleMap() {
var latlng = new google.maps.LatLng(35.727637, 139.705192);/* 座標 */
var myOptions = {
zoom: 16, /*拡大比率*/
center: latlng,
scrollwheel: false,
mapTypeControlOptions: { mapTypeIds: ['style', google.maps.MapTypeId.ROADMAP] }
};
var map = new google.maps.Map(document.getElementById('map1'), myOptions);

	
/*アイコン設定*/
var icon = new google.maps.MarkerImage('images/map_icon.png',/*画像url*/
new google.maps.Size(132,143),/*アイコンサイズ*/
new google.maps.Point(0,0)/*アイコン位置*/
);
var markerOptions = {
position: latlng,
map: map,
icon: icon,
title: 'シールズデンタル',/*タイトル*/
animation: google.maps.Animation.DROP,/*アニメーション*/
};
var marker = new google.maps.Marker(markerOptions);

/*マップのデザイン*/
var styleOptions = [{
  
    "featureType": "landscape.natural",
    "stylers": [
      { "color": "#7da28f" }/*…堤防？*/
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "gamma": 2.61 },
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "transit.line",
    "stylers": [
      { "invert_lightness": true },
      { "visibility": "simplified" },
      { "color": "#96a7b3" }
    ]
  },{
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "landscape.man_made",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#e6e6e6" }/*メイン背景*/
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      { "color": "#d8e0e6" }/*建物*/
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#a6bbca" }/*川*/
    ]
  },{
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      { "color": "#96a7b3" }
    ]
  }
	];

var styledMapOptions = { name: '地図' }/*地図右上のタイトル*/
var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
map.mapTypes.set('style', sampleType);
map.setMapTypeId('style');
};
google.maps.event.addDomListener(window, 'load', function() {
googleMap();
});



