angular.module('routerApp',['ui.router'])
 .config(function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/');
   $stateProvider
    .state('swapi', {
      url: '/swapi',
      templateUrl: 'app/components/swapi/swapi.html',
      controller: 'swapiCtrl'
    })
    .state('user', {
      url: '/user',
      templateUrl: 'app/components/user/user.html',
      controller: 'userCtrl',
      controllerAs: 'parentCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'app/components/profile/profile.html',
      controller: 'profileCtrl'
    })
 })