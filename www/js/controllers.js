angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.Search = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.find = PetService.get($stateParams.SearchId);
})

.controller('MovieCtrl', ['$scope', 'MovieService', function ($scope, MovieService) {
	$scope.$watch('titlemovie' , function(newTitle) {
		MovieService.getMovies($scope.titlemovie)
			.success(function(data, status, ready) {
				console.log(data)
			})
	});
}]);