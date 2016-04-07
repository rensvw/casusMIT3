'use strict';

angular.module('casusMIT3.authentication', ['AdalAngular'])


    .controller('authenticationCtrl', '$scope', 'adalService', [function($scope, adalService) {

        $scope.login = function () {
            adalService.login();
        };
        $scope.logout = function () {
            adalService.logOut();
        };


    }]);