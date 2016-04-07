'use strict';

// Declare app level module which depends on views, and components
angular.module('casusMIT3', [
  'ngRoute',
  'casusMIT3.index',
  'casusMIT3.results',
    'ui.bootstrap',
    'AdalAngular'
]).
config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', '$sceDelegateProvider', function($routeProvider, $httpProvider, adalAuthenticationServiceProvider, $sceDelegateProvider) {

       $routeProvider.otherwise({
           redirectTo: '/index'
           });

    adalAuthenticationServiceProvider.init(
        {
            tenant: 'vwoudenberg.onmicrosoft.com/',
            clientId: '39596d89-8c4a-49ad-b299-69dbc7a7cd28',
            endpoints: {
                'https://api.powerbi.com':'https://analysis.windows.net/powerbi/app'
            },
            requireADLogin: true,
            cacheLocation:'localStorage'
        },
        $httpProvider
    );

    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://*powerbi.com/**'
    ]);

}]);
