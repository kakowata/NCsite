function drawMap(){var e=document.getElementById("map_canvas"),a=new google.maps.LatLng(35.6709182,139.4809435),t={zoom:17,center:a,scrollwheel:!1,draggable:!1,styles:[{elementType:"geometry",stylers:[{hue:"#ff4400"},{saturation:-68},{lightness:-4},{gamma:.72}]},{featureType:"road",elementType:"labels.icon"},{featureType:"landscape.man_made",elementType:"geometry",stylers:[{hue:"#0077ff"},{gamma:3.1}]},{featureType:"water",stylers:[{hue:"#00ccff"},{gamma:.44},{saturation:-33}]},{featureType:"poi.park",stylers:[{hue:"#44ff00"},{saturation:-23}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{hue:"#007fff"},{gamma:.77},{saturation:65},{lightness:99}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{gamma:.11},{weight:5.6},{saturation:99},{hue:"#0091ff"},{lightness:-86}]},{featureType:"transit.line",elementType:"geometry",stylers:[{lightness:-48},{hue:"#ff5e00"},{gamma:1.2},{saturation:-23}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{saturation:-64},{hue:"#ff9100"},{lightness:16},{gamma:.47},{weight:2.7}]}]};map=new google.maps.Map(e,t);var r=[["〒183-0023 東京都府中市宮町2丁目15-13第15三ツ木ビル6F",35.6697503,139.4810508]];for(i=0;i<r.length;i++){var n=r[i][0],s=new google.maps.LatLng(r[i][1],r[i][2]),l=createMarker({position:s,map:map,icon:"images/common/mapicon.png",text:n});marker1.push(l),all_markers.push(l),l.setVisible()}}function createMarker(e){var a=new google.maps.Marker(e),t=new google.maps.InfoWindow;return t.setContent(e.text),google.maps.event.addListener(a,"click",function(){currentWindow&&currentWindow.close(),t.open(a.getMap(),a),currentWindow=t}),a}var currentWindow=null,map=null,marker1=[],all_markers=[],i=0;google.maps.event.addDomListener(window,"load",drawMap);