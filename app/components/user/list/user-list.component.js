function getData() {
  let responseData = [];
  //responseData = fetch('/article/promise-chaining/user.json');
  responseData = [
    {id: "1", username: 'sadmin', firstname:"guliz", lastname: 'ay'}
    ,{id: "2", username: 'admin', firstname:"admin", lastname: 'admin'}];

  //console.log(responseData)
  return responseData;
}

async function _fetchData() {
  let datas = getData();
  let result = await datas;
  console.log(datas)
  return result;
}

angular.module('userApp')
  .component('userList', {
    templateUrl: 'app/components/user/list/user-list.template.html',
    controller: function userListCtrl($scope, $firebaseArray) {
      this.result = "aa";
      $scope.$on("getList", async function(){
        console.log("run child fetchData")
        let _datas = getData();
        this.datas = await _datas;
        //this.result =  angular.fromJson(_datas);
        this.result = "_datas";
        console.log(this.result)
      });
    }
  })