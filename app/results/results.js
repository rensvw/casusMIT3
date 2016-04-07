'use strict';

angular.module('casusMIT3.results', ['ngRoute','AdalAngular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/results', {
    templateUrl: 'results/results.html',
    controller: 'resultsCtrl',
    requireADLogin: true
  });
}])

.controller('resultsCtrl', ['$scope', 'powerBi',function($scope, powerBi) {

  $scope.dashboards;
  $scope.status;

listAllDashboards();

  function listAllDashboards(){
    powerBi.listAllDashboards()
        .then(function (response) {
          $scope.dashboards = response.data;

        },function (error) {
          $scope.status = "Unable to load Dashboard data: " + error.message;

        })
  }

}]);