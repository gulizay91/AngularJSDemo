angular.module('profileApp', ['ui.router'])
 .controller('profileCtrl',['$scope', function($scope){
    $scope.name = "xxxx"
    
    $scope.updateName = function() {
      console.log("click updateName")
      $scope.name = "yyy"
    }
 }])