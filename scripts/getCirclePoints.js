function getCirclePoints(center, radius) {

	var circlePoints = [];
	var searchPoints = [];
	with(Math) {
		var rLat = (radius / 6378.135) * (180 / PI);
		var rLng = rLat / cos(center.lat() * (PI / 180));
		for (var a = 0; a < 361; a++) {
			var aRad = a * (PI / 180);
			var x = center.lng() + (rLng * cos(aRad));
			var y = center.lat() + (rLat * sin(aRad));
			var point = new google.maps.LatLng(parseFloat(y), parseFloat(x));
			circlePoints.push(point);
			if (a % pointInterval == 0) {
				searchPoints.push(point)
			}
		}
	}
	searchPolygon = new google.maps.Polygon({
		paths: circlePoints,
		strokeColor: '#000000',
		strokeOpacity: 1,
		strokeWeight: 1,
		fillColor: '#ffffff',
		geodesic: true,
		fillOpacity: 0.5,
		clickable: false
	});
	searchPolygon.setMap(map);
	map.fitBounds(searchPolygon.getBounds());
	return searchPoints
}