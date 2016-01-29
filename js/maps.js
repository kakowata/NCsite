var map;
var Signite = new google.maps.LatLng(35.6697226, 139.4810928);
var Fuchu = new google.maps.LatLng(35.6710315,139.4807471);
var startSpot = "府中駅";
var endSpot = "第１５ツ木ビル";
var currentDirections = null;
var endSpot = Signite;


// ルート表示オプション
rendererOptions = {
    preserveViewport: false,
    suppressMarkers: true,
    polylineOptions: {
        strokeColor: "#0097A7",
        strokeWeight: 5,
				draggable: true
    }
};
var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
var directionsService = new google.maps.DirectionsService();

function initialize() {
        var myOptions = {
            zoom: 16,
            center: Fuchu,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDoubleClickZoom: true,
            streetViewControl: false,
            panControl: false
        };
        map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
        directionsDisplay.setMap(map);
				
        //マーカー
        var marker = new google.maps.Marker({
            position: Signite,
            map: map,
            draggable: false,
            icon: "images/company/map_icon.svg"
        });
				
        //　情報ウィンドウ
        var contentString = "京王線府中駅から<br>徒歩5分！";
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        infowindow.open(map, marker);
				
        // ストリートビュー表示
        var svp = new google.maps.StreetViewPanorama(document.getElementById(
            "pano"), {
            position: Signite,
            linksControl: false,
            addressControl: false,
            pov: {
                heading: 180,
                pitch: 30,
                zoom: 1
            }
        });
        map.setStreetView(svp);
				
        // マーカーのドロップ（ドラッグ終了）時のイベント　－－－－－－－－－－－－－－－－－－－－－－－－
        google.maps.event.addListener(marker, 'dragend', function(ev) {
            // イベントの引数evの、プロパティ.latLngが緯度経度。
            var st_latlng = new google.maps.LatLng(ev.latLng.lat(), ev.latLng.lng());
            var move_st = new google.maps.StreetViewPanorama(document.getElementById(
                "pano"), {
                position: st_latlng
            });
            map.setStreetView(move_st);
        });
				
				//calcRoute();
				
				$("#signite").click(function(){
						initialize();
				});
				
    }
    //  ルート表示



function calcRoute() {
    var request = {
        origin: startSpot,
        destination: endSpot,
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
        unitSystem: google.maps.DirectionsUnitSystem.METRIC,
        optimizeWaypoints: true,
        avoidHighways: false,
        avoidTolls: false,
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}