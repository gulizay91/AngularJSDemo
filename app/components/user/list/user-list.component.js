function getData() {
  let responseData = [];
  //responseData = fetch('/article/promise-chaining/user.json');
  responseData = [
    {id: "1", name:"guliz"}
    ,{id: "2", name:"admin"}];

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
    bindings: { api : "=" },
    controller: function userListCtrl($scope, $firebaseArray) {
      
      this.$onInit = function() {
        this.datas = [];
        this.api = {};
        this.api.getList = fetchDatas;
      };
      $scope.$on("getList",function(){
        console.log("click child fetchData")
        let _datas = getData();
        this.datas = _datas;
      });

      function fetchDatas() {
        console.log("click child fetchData")
        let _datas = getData();
        this.datas = _datas;
        //this.datas = _fetchData();
        //window.location.reload();
      }
    }
  })