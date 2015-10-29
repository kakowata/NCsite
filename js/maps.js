var currentWindow = null;
var map = null;
var marker1 = [];
var all_markers = [];
var i = 0;

function drawMap(){

    //初期設定ここから
    var map_tags = document.getElementById("map_canvas");
    var map_location = new google.maps.LatLng(35.6709182,139.4809435);
    var options = {
        zoom : 17,
        center: map_location,
				scrollwheel: false,
				draggable: false,
        //mapTypeId : google.maps.MapTypeId.ROADMAP
			  styles:[{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
    };    
    map = new google.maps.Map(map_tags,options);
    //初期設定ここまで
    
    var markers = [
        ["〒183-0023 東京都府中市宮町2丁目15-13第15三ツ木ビル6F",35.6697503,139.4810508],
    ];
    for ( i = 0; i < markers.length; i++) {
        var name = markers[i][0];
        var latlng = new google.maps.LatLng(markers[i][1],markers[i][2]);
        var m = createMarker({
            position: latlng,
            map: map,
            icon : "images/common/mapicon.png",
            text : name,
        });
        marker1.push(m);
				all_markers.push(m);
        m.setVisible();
    }

}

//マーカー設定ここまで

//情報ウィンドウ設定ここから

function createMarker(options){
    var marker = new google.maps.Marker(options) ;
    
    var infoWnd = new google.maps.InfoWindow();
    infoWnd.setContent(options.text);
    
    google.maps.event.addListener(marker,"click",function(){
        if (currentWindow) {
            currentWindow.close();
        }
       infoWnd.open(marker.getMap(), marker); 
       currentWindow = infoWnd;
    });
    return marker;
}
//情報ウィンドウ設定ここまで
google.maps.event.addDomListener(window, 'load', drawMap);



		


		
		
