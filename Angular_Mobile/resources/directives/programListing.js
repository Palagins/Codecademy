app.directive('programListing', function() {
  return {
    restrict: 'E',
    scope: {
      listing: '='
    },
    templateUrl: './resources/directives/programListing.html'};
});
