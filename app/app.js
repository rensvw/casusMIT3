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

    adalProvider.init({
            tenant: "72f988bf-86f1-41af-91ab-2d7cd011db47", // microsoft.onmicrosoft.com
            clientId: "92f12926-5cf0-4460-83b6-14366bbaa88a", // Power BI AngularJS SPA
            endpoints: {
                "https://api.powerbi.com": "https://analysis.windows.net/powerbi/api",
            },
            requireADLogin: true,
            cacheLocation: 'localStorage'
        },
        $httpProvider
    );

    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://*.powerbi.com/**'
    ]);



}]);
