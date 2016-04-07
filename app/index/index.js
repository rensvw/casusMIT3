'use strict';

angular.module('casusMIT3.index', ['ngRoute','AdalAngular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'index/index.html',
    controller: 'indexCtrl',
    requireADLogin: true
  });
}])


.controller('indexCtrl', ['adalAuthenticationService', '$http', function(adalService,$http) {

  test();

  function test(){
  $http.get('https://api.powerbi.com/beta/myorg/dashboards')
      .succes(function (d) {
        console.log("yay");
      })
      .error(function (d) {
        console.log("nope");
      })
}


}]);