(function() {
  'use strict';

  angular
    .module('morningCoffee')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/modules/views/index.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('members', {
        url: '/members',
        templateUrl: 'app/modules/views/members.html',
        controller: 'MembersController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
