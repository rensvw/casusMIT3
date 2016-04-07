'use strict';

angular.module('casusMIT3.view1', ['ngRoute','AdalAngular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    requireADLogin: true
  });
}])

.controller('View1Ctrl', [function() {

}]);