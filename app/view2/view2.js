'use strict';

angular.module('casusMIT3.view2', ['ngRoute','AdalAngular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    requireADLogin: true
  });
}])

.controller('View2Ctrl', [function() {

}]);