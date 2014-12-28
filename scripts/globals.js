	var drivePolygons = [];
	
	var circlePoints = [];
	
	var drivePolyPoints = []

	var searchPolygon, drivePolygon = null;
	
	var travel_distance_km ;

	var travel_time_sec;
	
	var pointInterval = 5;
	
	var startpoint;
	
	var searchPointsmax;
	
	var directionsService = null;

	var markers = {};

	var selectedMode = google.maps.TravelMode.DRIVING;

	var directionsDisplay = new google.maps.DirectionsRenderer();

	var requestDelay = 100;

	var reset = function()
	{
		 circlePoints = [];
		
		 drivePolyPoints = [];

		 markers = {};

		 directionsDisplay.setMap(null);
	}



