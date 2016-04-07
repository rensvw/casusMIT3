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
            clientId: 'f9829472-0637-4ede-9b92-79baef61829d',
            clientSecret: 'tEzHCUxrRoB1k6b7huXH56VOfM++aoO+4a//GV7G7hs=',
            resource: 'https://analysis.windows.net/powerbi/api',
            redirectUri: 'https://casuszuyd.azurewebsites.net',
            authorityUri: 'https://login.windows.net/common/oauth2/authorize',
            

        },
        $httpProvider
    );



}]);
