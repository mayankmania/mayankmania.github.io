/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../app.module.js" />

var mainController = function ($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
};
