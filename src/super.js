(function() {
  "use strict";
  angular
    .module("myApp")
    .controller("super", [
      "$scope",
      function($scope) {
        $scope.date = "DATE FROM SCOPE";
        //this is super comment. Such wowo
        /* Also super comment */
        $scope.onClick = value => {
          console.log("Super ", value);
          let str = 'Superstring'
          console.log(`This is ${str} and ${$scope.date}`);
        };
      }
    ]);
})();
