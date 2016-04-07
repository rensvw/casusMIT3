'use strict';

angular.module('casusMIT3.index', ['ngRoute','AdalAngular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'index/index.html',
    controller: 'indexCtrl',
    requireADLogin: true
  });
}])


.controller('indexCtrl', ['adalAuthenticationService', '$http', '$scope', function(adalService,$http,$scope) {

  $scope.reports;
  test();

    $http.get('https://api.powerbi.com/beta/myorg/reports').then(function (response) {
        $scope.reports = response.data.value;
        $scope.selectedReport = $scope.reports[0].embedUrl;
    });

    var iframe = document.getElementById("report");
    iframe.addEventListener("load", function () {
        var token = adal.getCachedToken("https://analysis.windows.net/powerbi/api");
        iframe.contentWindow.postMessage(JSON.stringify({ action: "loadReport", accessToken: token }), "*");
    });

}]);;