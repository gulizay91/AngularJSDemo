angular.module('routerApp',[]);
angular.module('swapiApp', []);
angular.module('userApp', []);

angular.module('rootApp', [
    'routerApp'
  , 'swapiApp'
  , 'userApp'
]);