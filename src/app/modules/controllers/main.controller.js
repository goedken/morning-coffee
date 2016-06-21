(function() {
  'use strict';

  angular
    .module('morningCoffee')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http) {

    $scope.coffees = [];
    $http.get('app/modules/controllers/mock.json')
      .success(function(res) {
        $scope.coffees = res;
        console.log($scope.coffees);
      })

  }
})();
