"use strict";

(function () {
  "use strict";

  angular.module("myApp", []).controller("example", ["$scope", function ($scope) {
    $scope.date = new Date();
    //this is index comment. Wow
    $scope.onClick = function (value) {
      console.log("Clicked", value);
      console.log('Polytest', value.padStart(20, '~'));
    };
  }]);
})();
"use strict";

(function () {
  "use strict";

  angular.module("myApp").controller("super", ["$scope", function ($scope) {
    $scope.date = "DATE FROM SCOPE";
    //this is super comment. Such wowo
    /* Also super comment */
    $scope.onClick = function (value) {
      console.log("Super ", value);
      var str = 'Superstring';
      console.log("This is " + str + " and " + $scope.date);
    };
  }]);
})();