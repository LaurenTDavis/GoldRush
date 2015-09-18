// angular.module("app", [])

// var mainControllerFunc = function($scope){

// 	$scope.markers = []
	
// 	$scope.addMarker = function(event){
// 		$scope.markerBox = {
// 			xposition: (event.pageX - 24),
// 			yposition: (event.pageY - 24),
// 			//comment: prompt('enter a comment'),
// 			commentVisibility: false,
// 		}
// 		$scope.markers.push($scope.markerBox)
// 		console.log($scope.markers)
		
// 	}
	
// 	$scope.removeMarker = function(index){
// 		$scope.markers.splice(index,1) 
// 	}

// 	$scope.toggleComment = function(index) {
// 		$scope.markers[index].commentVisibility = !$scope.markers[index].commentVisibility
// 	}	
// }

// angular.module("app").controller("mainController", ["$scope", mainControllerFunc])



    //center: {lat: 40.25220729, lng: -105.8230671},




function initialize() {
  var mapLocation = {lat:-16.5004126, lng: -151.74149039};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: mapLocation
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });


  addMarker(mapLocation, map);
}


function addMarker(location, map) {
 
  var marker = new google.maps.Marker({
    // var click
    position: location,
    map: map
  });
}

google.maps.event.addDomListener(window, 'load', initialize);