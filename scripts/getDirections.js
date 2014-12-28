function getDirections() {
	
	if (!searchPoints.length) {
		
		//If Searchpoints are all completed, then we are done
		document.getElementById("pc").innerHTML = "<p>100%</p>";
		document.getElementById('loadinggif').style.display = "none";
		
		//Fit Map to Drive time polygon created
		map.fitBounds(drivePolygon.getBounds());
		
		//Remove Search Circle
		searchPolygon.setMap(null);

		reset();

		//Process is finished.
		return;

	} else {
		
		//Calculate Percetage done.
		var percent = Math.round(100 - ((searchPoints.length / searchPointsmax) * 100));
		
		document.getElementById("pc").innerHTML = "<p>" + percent + "%</p>"
	}

	var from = startpoint.lat() + ' ' + startpoint.lng();
	var to = searchPoints[0].lat() + ' ' + searchPoints[0].lng();
	
	//Removed processed Point. 
	searchPoints.shift()
	
	//directionsDisplay.setMap(map);
	
	
	
	var request = {
		origin: from,
		destination: to,
		travelMode: google.maps.TravelMode[selectedMode],
		avoidHighways: false
	};

	directionsService.route(request, directionsearch)
}