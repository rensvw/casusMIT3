'use strict';

// Declare app level module which depends on views, and components
angular.module('casusMIT3', [
    'ngRoute',
    'casusMIT3.index',
    'casusMIT3.results',
    'ui.bootstrap',
    'AdalAngular',
    'ngMaterial'
]).config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', '$sceDelegateProvider', function ($routeProvider, $httpProvider, adalAuthenticationServiceProvider, $sceDelegateProvider) {

    $routeProvider.otherwise({
        redirectTo: '/index'
    });

    adalAuthenticationServiceProvider.init({
            tenant: "4c4da4a8-6a78-4ea2-8593-ae0608a6200b", // microsoft.onmicrosoft.com
            clientId: "f9829472-0637-4ede-9b92-79baef61829d", // Power BI AngularJS SPA
            endpoints: {
                'https://api.powerbi.com': 'https://analysis.windows.net/powerbi/api',
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
//adafd