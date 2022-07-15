app.factory('places', ['$http', function($http) {
  return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=52.527467%7C13.415685&gslimit=30&format=json&callback=JSON_CALLBACK')
  .success(function(data) {
    return data;
  })
  .error(function(err) {
    return err;
  });
}]);