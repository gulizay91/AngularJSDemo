angular.module('routerApp',['ui.router'])
 .config(function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/');
   $stateProvider
    .state('swapi', {
      url: '/swapi',
      templateUrl: 'app/components/swapi/swapi.html',
      controller: 'swapiCtrl'
    })
 })