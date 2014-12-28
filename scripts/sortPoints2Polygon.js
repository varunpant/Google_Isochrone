function sortPoints2Polygon() {
	
	points = [];
	
	var bounds = new google.maps.LatLngBounds();
	
	for (var i = 0; i < drivePolyPoints.length; i++) {
		
		points.push(drivePolyPoints[i]);
		
		bounds.extend(drivePolyPoints[i])
	}

	var center = bounds.getCenter();
	
	var bearing = [];
	
	for (var i = 0; i < points.length; i++) {
		
		points[i].bearing = google.maps.geometry.spherical.computeHeading(center, points[i]);
	}

	points.sort(sortByBearing);

	drivePolyPoints = points
}


function sortByBearing(a, b) {
	
	return (a.bearing - b.bearing)
}
