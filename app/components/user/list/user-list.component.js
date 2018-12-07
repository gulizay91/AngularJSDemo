function getData() {
  let responseData = [];
  
  responseData = [
    {id: "1", username: 'sadmin', firstname:"guliz", lastname: 'ay'}
    ,{id: "2", username: 'admin', firstname:"admin", lastname: 'admin'}];

  //console.log(responseData)
  return responseData;
}

async function _fetchData() {
  let datas = getData();
  let result = await datas;

  //console.log(datas)
  return result;
}

angular.module('userApp')
  .component('userList', {
    templateUrl: 'app/components/user/list/user-list.template.html',
    bindings: { datas: "<"},
    controller: function userListCtrl($scope, $firebaseArray) {
      
      $scope.$on("getList", function(){
        console.log("run child fetchData")
        this.datas = getData();
        $scope.$parent.datas = this.datas;
        console.log(this.datas)
      });

      this.$onChanges = function (changes) {
        console.log("change data")
        this.datas = [{id: "0", username: 'username', firstname:"fname", lastname: 'lname'}];
        console.log(changes)
      };
    }
  })