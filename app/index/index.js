'use strict';

angular.module('casusMIT3.index', ['ngRoute','AdalAngular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'index/index.html',
    controller: 'indexCtrl',
    requireADLogin: true
  });
}])


.controller('indexCtrl', ['adalAuthenticationService', '$http', function($http, adalService) {

  $http.get('https://api.powerbi.com/beta/myorg/dashboards')
      .succes(function () {
        console.log("yay");
      })
      .error(function () {
        console.log("nope");
      })

}]);