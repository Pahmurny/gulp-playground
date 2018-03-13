(function() {
  "use strict";
  angular
    .module("myApp", [])
    .controller("example", [
      "$scope",
      function($scope) {
        $scope.date = new Date();
        //this is index comment. Wow
        $scope.onClick = value => {
          console.log("Clicked", value);
          console.log('Polytest', value.padStart(20, '~'));
        };
      }
    ]);
})();
