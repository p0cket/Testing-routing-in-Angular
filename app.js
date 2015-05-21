var inBigText = angular
  .module('inBigText', [
    'firebase', 'ngRoute'
  ])
  .constant('FURL', 'inbigtext.firebaseIO.com/')

  inBigText.config(function ($routeProvider) {

    $routeProvider

    .when('/',{
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })

    .when('/second', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })

  });

  inBigText.controller('mainController', ['$scope', 'FURL', '$firebase', function($scope, FURL, $firebase){

    var ref = new Firebase(FURL);
    var fbStatements = $firebase(ref.child('posts')).$asArray();

    $scope.statements = fbStatements;

    $scope.postStatement = function(statement){
      fbStatements.$add(statement);
    }

}]);
