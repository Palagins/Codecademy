app.directive('plusOne', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'resources/directives/plusOne.html',
    link: function(scope, element, attrs) {
      scope.like = function() {
        element.toggleClass('btn-like');
      }
    }
  };
});