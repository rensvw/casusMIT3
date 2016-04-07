'use strict';

// Declare app level module which depends on views, and components
angular.module('casusMIT3', [
  'ngRoute',
  'casusMIT3.view1',
  'casusMIT3.view2',
    'ui.bootstrap',
    'AdalAngular'
]).
config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function($routeProvider, $httpProvider, adalAuthenticationServiceProvider) {

       $routeProvider.otherwise({
           redirectTo: '/view1'
           });

    adalAuthenticationServiceProvider.init(
        {
            tenant: 'vwoudenberg.onmicrosoft.com/',
            clientId: '39596d89-8c4a-49ad-b299-69dbc7a7cd28'
        },
        $httpProvider
    );

}]);
