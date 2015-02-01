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

    $scope.destroy = function (article) {
      $http.delete('/articles/' + $stateParams.id, article).success(function () {
        $state.go('home');
      })
    }
  }])
  .controller("AutomobileController", ['$scope', '$http', '$stateParams', '$state', function ($scope, $http, $stateParams, $state) {
    $scope.automobiles = [];
    $scope.automobile = {};

    if ($stateParams.id) {
      $http.get('/automobiles/' + $stateParams.id).success(function (data) {
        $scope.automobile = angular.copy(data);
      })
    } else {
      $http.get('/automobiles').success(function (data) {
        $scope.automobiles = angular.copy(data);
      });
    }

    $scope.create = function (automobile) {
      $http.post('/automobiles', automobile).success(function (data) {
        $scope.automobiles.push(data);
      })
    };

    $scope.update = function (automobile) {
      $http.put('/automobiles/' + $stateParams.id, automobile).success(function () {
        $state.go('showAutomobile', {id: $stateParams.id});
      }).error(function () {
        console.log('error')
      });
    };

    $scope.destroy = function (automobile) {
      $http.delete('/automobiles/' + $stateParams.id, automobile).success(function () {
        $state.go('automobiles');
      })
    }
  }])
  .controller("ColorController", ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
    $scope.colors = [];
    $scope.color = {};

    if ($stateParams.id) {
      $http.get('/colors/' + $stateParams.id).success(function (data) {
        $scope.color = angular.copy(data);
      })
    } else {
      $http.get('/colors').success(function (data) {
        $scope.colors = angular.copy(data);
      });
    }

    $scope.create = function (color) {
      $http.post('/colors', color).success(function (data) {
        $scope.colors.push(data)
      })
    }
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
    .state('deleteArticle', {
      url: '/articles/{id}/delete',
      templateUrl: '/delete.html',
      controller: 'ArticleController'
    })
    .state('automobiles', {
      url: '/automobiles',
      templateUrl: '/automobiles.html',
      controller: 'AutomobileController'
    })
    .state('showAutomobile', {
      url: '/automobiles/{id}',
      templateUrl: '/automobiles/show.html',
      controller: 'AutomobileController'
    })
    .state('editAutomobile', {
      url: '/automobiles/{id}/edit',
      templateUrl: '/automobiles/edit.html',
      controller: 'AutomobileController'
    })
    .state('deleteAutomobile', {
      url: '/automobiles/{id}/delete',
      templateUrl: '/automobiles/delete.html',
      controller: 'AutomobileController'
    })
    .state('colors', {
      url: '/colors',
      templateUrl: '/colors.html',
      controller: 'ColorController'
    })
    .state('showColor', {
      url: '/colors/{id}',
      templateUrl: '/colors/show.html',
      controller: 'ColorController'
    })
}]);