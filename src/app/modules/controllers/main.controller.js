(function() {
  'use strict';

  angular
    .module('morningCoffee')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http) {

    $scope.coffees = [];
    $http.get('app/modules/controllers/coffees.json')
      .success(function(res) {
        $scope.coffees = res;
        $scope.coffeeOfTheDay = $scope.coffees[0];
        console.log($scope.coffees);
      });


    $scope.setCoffeeOfTheDay = function(coffee) {
      $scope.coffeeOfTheDay = coffee;
    };

    $scope.addCoffee = function(){
      $scope.coffees.push({
        country: $scope.country,
        vendor: $scope.vendor,
        roast: $scope.roast,
        notes: $scope.notes
      });
      $http.post('app/modules/controllers/coffees.json', $scope.coffees)
        .success(function(res) {
          console.log(res);
        })
    }
  }
})();
