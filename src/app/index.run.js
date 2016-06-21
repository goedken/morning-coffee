(function() {
  'use strict';

  angular
    .module('morningCoffee')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
