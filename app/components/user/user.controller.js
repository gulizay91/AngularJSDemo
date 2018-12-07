angular.module('userApp', ['firebase','ui.router'])
 .controller('userCtrl',['$scope','$firebaseArray', function($scope, $firebaseArray){
    $scope.title = "Users"
    $scope.datas = [{}];

    $scope.getUserList = function() {
      //$scope.datas = [{id: "0", username: 'username2', firstname:"fname2", lastname: 'lname2'}];
      console.log("click fetchData from parent")
      $scope.$broadcast("getList"); 
    }
 }])