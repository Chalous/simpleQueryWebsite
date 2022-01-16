var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

  // AngularJS的ng-click事件是要此方式定义的，跟一般的onclick函数不同
  $scope.queryData = function () {
    $http.get("/query?key=" + $scope.queryKey).then(function (req, response) {
      console.log('req',req);
      console.log('res',response);
      $scope.resultArray = req.data;
    });
  }
});