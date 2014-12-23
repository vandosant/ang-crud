angular.module('angularCrud', [])
  .controller("FormController", ['$scope', '$http', function ($scope, $http) {
    $http.get('/articles').success(function(data) {
      $scope.articles = angular.copy(data);
    });

    $scope.update = function (article) {
      $http.post('/articles', article).success(function(data) {
        $scope.articles.push(data);
      })
    }

  }]);
