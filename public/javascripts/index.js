var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("/welcome").then(function (response) {
      $scope.myWelcome = response.data;
  });
});