'use strict';

angular.module('casusMIT3.results', ['ngRoute','AdalAngular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/results', {
    templateUrl: 'results/results.html',
    controller: 'resultsCtrl',
    requireADLogin: true
  });
}])

.controller('resultsCtrl', ['powerBiFactory',function(powerBiFactory) {

}]);