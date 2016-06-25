(function() {
  'use strict';

  angular
    .module('morningCoffee')
    .controller('MembersController', MembersController);

  /** @ngInject */
  function MembersController($scope, $http) {

    $scope.members = [];
    $http.get('app/modules/controllers/members.json')
      .success(function(res) {
        $scope.members = res;
        console.log($scope.members);
      });

  }
})();
