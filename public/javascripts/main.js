angular.module('angularCrud', [])
  .controller("FormController", ['$scope', '$http', function ($scope, $http) {
    $scope.articles = [];

    $scope.update = function (article) {
      console.log($scope.articles);
      console.log(article);

      $http.post('/articles', article).success(function(data) {
        console.log(data);
        $scope.articles.push(data);
      })
    }

  }]);
