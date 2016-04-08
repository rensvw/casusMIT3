'use strict';

angular.module('casusMIT3.results', ['ngRoute', 'AdalAngular', 'ngMaterial'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/results', {
            templateUrl: 'results/results.html',
            controller: 'resultsCtrl',
            requireADLogin: true
        });
    }])

    .controller('resultsCtrl', ['$scope', 'powerBi', function ($scope, powerBi) {

        $scope.dashboards;
        $scope.status;
        $scope.tile;
        $scope.groups;
        $scope.datasets;
        $scope.tables;

       // $scope.datasetID = $scope.datasets.id;

        listAllDashboards();
        listAllGroups();
        listAllDatasets();


        function listAllDashboards() {
            powerBi.listAllDashboards()
                .then(function (response) {
                    $scope.dashboards = response.data.value;

                }, function (error) {
                    $scope.status = "Unable to load Dashboard data: " + error.message;

                })
        }

        function getDashboardTile() {
            powerBi.listAllTiles('a34b834a-8988-490e-ad29-3accf6270a98')
                .then(function (response) {
                    $scope.tile = response.data.value;

                }, function (error) {
                    $scope.status = "Unable to load Dashboard Tile data: " + error.message;

                });
        }

        function addRowToTable() {
            ///powerBi.addRowToTable(id,table,row);

        }

        function listAllDatasets() {
            powerBi.listAllDataSets()
                .then(function (response) {
                    $scope.datasets = response.data.value;

                }, function (error) {
                    $scope.status = "Unable to load Datasets Data: " + error.message;

                });
        }

        function listAllTables() {
            powerBi.listAllTables(
                powerBi.listAllDataSets().then(function (response) {
                    return response.data.value[0].id;
                }))
                .then(function (response) {
                    $scope.tables = response.data;

                }, function (error) {
                    $scope.status = "Unable to load Table data: " + error.message;

                });

        }



        function listAllGroups() {
            powerBi.listAllGroups()
                .then(function (response) {
                    $scope.groups = response.data;

                }, function (error) {
                    $scope.status = "Unable to load Groups data: " + error.message;

                });
        }


    }]);