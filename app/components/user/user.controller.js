angular.module('userApp', ['firebase','ui.router'])
 .controller('userCtrl',['$scope','$firebaseArray', function($scope, $firebaseArray){
    $scope.title = "Users"
    
    $scope.getUserList = function() {
      console.log("click fetchData from parent")
      $scope.$broadcast("getList"); 
      //$scope.childApi.getList();
      //window.location.reload();
    }
 }])