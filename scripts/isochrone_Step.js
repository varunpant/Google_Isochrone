function isochrone_Step(steps) {
	
	
	var unit = 0;
	
	var temp_Points = [];

	var comparator = travel_distance_km;
	
	if(ISOCHRONE)
	{
		comparator = travel_time_sec;
	}

	for (var n = 0; n < steps.length; n++) {
		
		if(ISOCHRONE)
			unit += steps[n].duration.value;
		else
			unit += steps[n].distance.value;
		
		if (unit < comparator) {
			temp_Points.push(steps[n].end_location)
		}
		 else {
			break;
		}
	}

    //This point becomes the Drivetime polygon marker.
	var lastPoint = temp_Points[temp_Points.length - 1];

	var hash = lastPoint.toString();
	
	if(!markers[hash])
	{
		markers[hash] = hash;
		console.log(hash);
		drivePolyPoints.push(lastPoint);
	
	
	if (drivePolyPoints.length == 1) {

		drivePolygon = new google.maps.Polygon({
			paths: drivePolyPoints,
			strokeColor: '#FF0000',
			strokeOpacity: 0.8,
			strokeWeight: 1,
			fillColor: '#FF0000',
			fillOpacity: 0.35,
			clickable: false,
			map: map
		});
		
		drivePolygon.setMap(map);
		
		drivePolygons.push(drivePolygon)
	}

	sortPoints2Polygon();
	
	drivePolygon.setPaths(drivePolyPoints);

	placeMarker(lastPoint, false);

	}

	setTimeout("getDirections()", requestDelay);
}