var map;
var Signite = new google.maps.LatLng(35.6697226, 139.4810928);
var Fuchu = new google.maps.LatLng(35.6710315,139.4807471);
var endSpot = "第１５ツ木ビル";
var currentDirections = null;
var endSpot = Signite;
var mk_array = new Array();
var latlng_array = new Array();
var directions;
var gs = google.maps.GeocoderStatus;
var geocoder;

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
		google.maps.event.addListener(map, 'click', setMarker);
		geocoder = new google.maps.Geocoder();

				
        //　シグナイトマーカー（初期表示） ------------------------------------------------
        var marker = new google.maps.Marker({
            position: Signite,
            map: map,
            draggable: false,
            icon: "images/company/map_icon.svg"
        });
		
		
		// マーカーの追加
		function setMarker(event){
			// event.latLng.lat()がクリックしたときの経度,event.latLng.lng()が緯度を表す
			var latlng = new google.maps.LatLng(event.latLng.lat(),event.latLng.lng());
			//if(mk_array.length > 0){
//				mk_array[0].setMap();//マーカー削除
//				mk_array.shift();//配列削除
//				latlng_array.shift();//配列削除
//				
//				//マーカーを設置し、各種オプションを入力していく
//				mk = new google.maps.Marker({
//					map:map,
//					position: latlng,
//					draggable: true
//				});
//				mk.setMap(map);
//				mk_array.push(mk);
//				latlng_array.push(latlng);
//			} else {
//				//マーカーを設置し、各種オプションを入力していく
//				mk = new google.maps.Marker({
//					map:map,
//					position: latlng,
//					draggable: true
//				});
//				mk.setMap(map);
//				mk_array.push(mk);
//				latlng_array.push(latlng);
//			}
			//directionsDisplay.setMap(null);
		}
		
        //　情報ウィンドウ  ---------------------------------------------------------------
        var contentString = "京王線府中駅から<br>徒歩5分！";
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        infowindow.open(map, marker);
		
		google.maps.event.addListener(marker, "click", function() {
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			infowindow.open(map, marker);
		});

				
				
        // ストリートビュー表示
        var svp = new google.maps.StreetViewPanorama(document.getElementById("pano"), {
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
            var move_st = new google.maps.StreetViewPanorama(document.getElementById("pano"), {
                position: st_latlng
            });
            map.setStreetView(move_st);
        });
		
		
		$("#root").click(function(){//　ルート表示ボタン
			codeAddress();
        	directionsDisplay.setMap(map);
			infowindow.close();
		});
		
		$("#signite").click(function(){//　元に戻るボタン
			initialize();
			latlng_array.shift();//配列削除
		});
		
    }
    //  ルート表示

function calcRoute(startSpot) {
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


function codeAddress() {
    // テキストボックスから住所を取得
    var address = document.getElementById("address").value;
    // ジオコーディングを依頼する
    geocoder.geocode(
        {'address': address}, // ジオコーディング リクエスト
        function(results, status) { // ジオコーディング結果callback関数
            if (status == gs.OK) { // 結果がOK ??
                // マップ中心設定
                map.setCenter(results[0].geometry.location);
                // マーカー設定
                var marker = new google.maps.Marker({
                    map: map, 
                    position: results[0].geometry.location
                });
				calcRoute(results[0].geometry.location);
				directionsDisplay.setPanel(document.getElementById("root_list"));
				
            } else {
                // 結果がOKではない場合
                alert("ジオコーディングが失敗しました。理由: " + geocoderErr[status]);
            }
        });
}