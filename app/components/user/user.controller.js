angular.module('userApp', ['firebase','ui.router'])
 .controller('userCtrl',['$scope','$firebaseArray', function($scope, $firebaseArray){
    $scope.title = "Users"
    $scope.$broadcast("getList"); 
    $scope.getUserList = function() {
      console.log("click fetchData")
      $scope.userList.getList();
      //window.location.reload();
    }
 }])