/**
 * Created by rensvanw on 4/7/2016.
 */
angular.module('casusMIT3')
    .factory('powerBiFactory', ['$http', function($http){

       var urlBase = 'https://api.powerbi.com/beta/vwoudenberg';
        var powerBiFactory = {};

        /// List Dashboards ///

        powerBiFactory.listAllDashboards = function () {
            return $http.get(urlBase + '/dashboards');
        }

        /// DataSet Get + Post functions ///

        powerBiFactory.listAllDataSets = function () {
            return $http.get(urlBase + '/datasets');
        }

        powerBiFactory.CreateDataSet = function (dataset) {
            return $http.post(urlBase + '/datasets' + '?defaultRetentionPolicy=none',dataset);
        }

        /// Table functions ///

        powerBiFactory.listAllTables = function (id) {
            return $http.get(urlBase + '/datasets/' + id  + '/tables');
        }

        powerBiFactory.addRowToTable = function(id, tableName, row){
            return $http.post(urlBase + '/datasets/' + id + '/tables/' + tableName + '/rows', row);
            
        }

        ///


    }


    ])

