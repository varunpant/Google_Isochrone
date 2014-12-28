var drawIsochrones = function(posi,ds,distance,time,mode) {
	
	ISOCHRONE = time ? true:false;

	startpoint = posi;

	directionsService = ds;
	
	travel_distance_km = (distance * 1000) || 1000;

	travel_time_sec = (time * 60 ) || 60;

    selectedMode = mode || google.maps.TravelMode.DRIVING;
	
	centerMarker = placeMarker(startpoint, true);
	
	searchPoints = getCirclePoints(startpoint, distance);
	
	searchPointsmax = searchPoints.length;
	
	drivePolyPoints = [];
	
	document.getElementById('loadinggif').style.display = "block";

	directionsDisplay.setMap(window.map);directionsDisplay.setOptions( { suppressMarkers: true } );

	getDirections();
}