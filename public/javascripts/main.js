angular.module('angularCrud', [])
  .controller("FormController", ['$scope', function ($scope) {
    $scope.articles = [];

    $scope.update = function (article) {
      console.log($scope.articles);
      console.log(article);

      $scope.articles.push(article);
    }

  }]);
