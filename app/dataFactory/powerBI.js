/**
 * Created by rensvanw on 4/7/2016.
 */
angular.module('casusMIT3')
    .factory('powerBi', ['$http', function($http){

       var urlBase = 'https://api.powerbi.com/beta/myorg';
        var powerBi = {};

        /// List Dashboards ///

        powerBi.listAllDashboards = function () {
            return $http.get(urlBase + '/dashboards');
        };

        /// DataSet Get + Post functions ///

        powerBi.listAllDataSets = function () {
            return $http.get(urlBase + '/datasets');
        };

        powerBi.CreateDataSet = function (dataset) {
            return $http.post(urlBase + '/datasets' + '?defaultRetentionPolicy=none',dataset);
        };

        /// Table functions ///

        powerBi.listAllTables = function (id) {
            return $http.get(urlBase + '/datasets/' + id  + '/tables');
        };

        powerBi.addRowToTable = function(id, tableName, row){
            return $http.post(urlBase + '/datasets/' + id + '/tables/' + tableName + '/rows', row);
            
        };



        /// Get tiles

        powerBi.getDashboardTile = function (dashboardID) {
            return $http.get(urlBase + '/' + dashboardID + '/tiles');
        };



        return powerBi;

    }


    ]);

