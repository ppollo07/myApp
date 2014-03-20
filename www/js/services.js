angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */


.service('MovieService', ['$q', '$http', function ($q, $http) {
  var urlBase = 'http://www.omdbapi.com/';

  this.getMovies = function($q) {
    return $http.get(urlBase + '?s=' + $q);
  };

  this.getMovie = function($q) {
    return $http.get(urlBase + '?i=' + $q);
  };

}])


.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
    Search = [
      {
         "Title":"The Shawshank Redemption",
         "Year":"1994",
         "imdbID":"tt0111161",
         "Type":"movie"
      },
      {
         "Title":"The Dark Knight",
         "Year":"2008",
         "imdbID":"tt0468569",
         "Type":"movie"
      },
      {
         "Title":"The Lord of the Rings: The Fellowship of the Ring",
         "Year":"2001",
         "imdbID":"tt0120737",
         "Type":"movie"
      },
      {
         "Title":"The Lord of the Rings: The Return of the King",
         "Year":"2003",
         "imdbID":"tt0167260",
         "Type":"movie"
      },
      {
         "Title":"The Matrix",
         "Year":"1999",
         "imdbID":"tt0133093",
         "Type":"movie"
      },
      {
         "Title":"The Godfather",
         "Year":"1972",
         "imdbID":"tt0068646",
         "Type":"movie"
      },
      {
         "Title":"The Lord of the Rings: The Two Towers",
         "Year":"2002",
         "imdbID":"tt0167261",
         "Type":"movie"
      },
      {
         "Title":"The Dark Knight Rises",
         "Year":"2012",
         "imdbID":"tt1345836",
         "Type":"movie"
      },
      {
         "Title":"The Avengers",
         "Year":"2012",
         "imdbID":"tt0848228",
         "Type":"movie"
      },
      {
         "Title":"The Departed",
         "Year":"2006",
         "imdbID":"tt0407887",
         "Type":"movie"
      }
    ];

  return {
    all: function() {
      return Search;
    },
    get: function(SearchId) {
      console.log(SearchId)
      // Simple index lookup
      return Search[SearchId];
    }
  }
});