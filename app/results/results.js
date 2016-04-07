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
    $scope.tile;

listAllDashboards();
    getDashboardTile();

  function listAllDashboards(){
    powerBi.listAllDashboards()
        .then(function (response) {
          $scope.dashboards = response.data ;

        },function (error) {
          $scope.status = "Unable to load Dashboard data: " + error.message;

        })
  }

    function getDashboardTile(){
        powerBi.getDashboardTile('a34b834a-8988-490e-ad29-3accf6270a98')
            .then(function (response) {
                $scope.tile = response.data;

            },function (error) {
                $scope.status = "Unable to load Dashboard data: " + error.message;

            })
    }


}]);