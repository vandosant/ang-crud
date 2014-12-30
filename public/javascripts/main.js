var app = angular.module('angularCrud', ['ui.router'])
  .controller("FormController", ['$scope', '$http', function ($scope, $http) {
    $http.get('/articles').success(function (data) {
      $scope.articles = angular.copy(data);
    });

    $scope.update = function (article) {
      $http.post('/articles', article).success(function (data) {
        $scope.articles.push(data);
      })
    }

  }])
  .controller("ArticleController", ['$scope', '$http', '$stateParams', '$state', function ($scope, $http, $stateParams, $state) {
    $http.get('/articles/' + $stateParams.id).success(function (data) {
      $scope.article = angular.copy(data);
    });

    $scope.update = function (article) {
      $http.put('/articles/' + $stateParams.id, article).success(function () {
        $state.go('articles', {id: $stateParams.id})
      })
    };
  }]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("home");

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'FormController'
    })
    .state('articles', {
      url: '/articles/{id}',
      templateUrl: '/articles.html',
      controller: 'FormController'
    })
    .state('editArticle', {
      url: '/articles/{id}/edit',
      templateUrl: '/edit.html',
      controller: 'ArticleController'
    })
}]);