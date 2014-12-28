function placeMarker(location,isstartpoint) {
	
	var marker;

	var center = {
		url: 'center.png',
		size: new google.maps.Size(32, 32),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(16, 32)
	};

	var point = {
		url: 'point.png',
		size: new google.maps.Size(16, 16),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(8, 8)
	};

	if(isstartpoint)
	{
		marker = new google.maps.Marker({
			position: location,
			map: map,
			icon :center,
			animation: google.maps.Animation.DROP
		});

	}
	else
	{
		marker = new google.maps.Marker({
			position: location,
			map: map,
			icon :point
		});
	}

	return marker
}
