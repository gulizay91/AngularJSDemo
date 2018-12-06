angular.module('routerApp',[]);
angular.module('swapiApp', []);
angular.module('userApp', []);
angular.module('profileApp', []);

angular.module('rootApp', [
    'routerApp'
  , 'swapiApp'
  , 'userApp'
  , 'profileApp'
]);