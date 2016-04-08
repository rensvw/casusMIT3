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
        listAllTables();
        createDataset();

        $scope.table = $scope.datasets;

        $scope.datasetID = powerBi.listAllDataSets().then(
            function (response) {
                $scope.datasetID = (response.data.value[0].id);
                console.log($scope.datasetID);
            }
        );

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
            powerBi.listAllTables(encodeURIComponent('43d72d66-8ed4-43bb-b4d0-5285caaebdc9'))
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

        var dataset = {
            'name': 'BostonHousing',
            'tables': [
                {
                    'name': 'BostonHousing',
                    'columns': [
                        {
                            'name': 'CRIM',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'ZN',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'INDUS',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'CHAS',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'NOX',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'RM',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'AGE',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'DIS',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'RAD',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'TAX',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'PTRATIO',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'B',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'LSTAT',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'MEDV',
                            'dataType': 'Int64'
                        }
                    ]
                }
            ]
        };

        var body = {
            'name': 'SalesMarketing',
            'tables': [
                {
                    'name': 'Product',
                    'columns': [
                        {
                            'name': 'ProductID',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'Name',
                            'dataType': 'string'
                        },
                        {
                            'name': 'Category',
                            'dataType': 'string'
                        },
                        {
                            'name': 'IsCompete',
                            'dataType': 'bool'
                        },
                        {
                            'name': 'ManufacturedOn',
                            'dataType': 'DateTime'
                        }
                    ]
                }
            ]
        };

        function createDataset() {
            powerBi.CreateDataSet(JSON.stringify(body))
                .then(function (response) {
                    console.log(response);

                })
        }

        var request = new XMLHttpRequest();

        request.open('POST', 'https://api.powerbi.com/v1.0/myorg/datasets?defaultRetentionPolicy=None');

        request.setRequestHeader('Content-Type', 'application/json');

        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log('Status:', this.status);
                console.log('Headers:', this.getAllResponseHeaders());
                console.log('Body:', this.responseText);
            }
        };

        var body = {
            'name': 'anushoofd',
            'tables': [
                {
                    'name': 'Product',
                    'columns': [
                        {
                            'name': 'ProductID',
                            'dataType': 'Int64'
                        },
                        {
                            'name': 'Name',
                            'dataType': 'string'
                        },
                        {
                            'name': 'Category',
                            'dataType': 'string'
                        },
                        {
                            'name': 'IsCompete',
                            'dataType': 'bool'
                        },
                        {
                            'name': 'ManufacturedOn',
                            'dataType': 'DateTime'
                        }
                    ]
                }
            ]
        };

        console.log(body);

        request.send(JSON.stringify(body));


    }]);