"use strict";angular.module("myApp",[]).controller("example",["$scope",function(o){o.date=new Date,o.onClick=function(o){console.log("Clicked",o),console.log("Polytest",o.padStart(20,"~"))}}]),angular.module("myApp").controller("super",["$scope",function(o){o.date="DATE FROM SCOPE",o.onClick=function(e){console.log("Super ",e),console.log("This is Superstring and "+o.date)}}]);