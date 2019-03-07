const styles: google.maps.MapTypeStyle[] = [
	{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
					{
							"visibility": "off"
					}
			]
	},
	{
			"featureType": "poi.park",
			"elementType": "all",
			"stylers": [
					{
							"visibility": "on"
					}
			]
	},
	{
			"featureType": "transit.station",
			"elementType": "all",
			"stylers": [
					{
							"visibility": "off"
					}
			]
	}
]

const options: google.maps.MapOptions={
	center: { lat: -11.97913, lng: -76.98810},
	zoom: 18,
	disableDefaultUI: true,
	styles: styles
}

export default options