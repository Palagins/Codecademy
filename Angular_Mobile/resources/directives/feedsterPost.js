app.directive('feedsterPost', function() {
  return {
    restrict: 'E',
    scope: {
      post: '='
    },
    templateUrl: 'resources/directives/feedsterPost.html'
  };
});
