'use strict'

/// <reference path="../typings/angularjs/angular.d.ts" />
var elController = angular.module('el.controller', ['el.services', 'ngRoute','ngAnimate']);
var elServices = angular.module('el.services', []);
//Shared directives must go here
var elDirectives = angular.module('el.directives', ['el.services']);
//Register all the controller in el.controller module

elController.controller('MainController', mainController);
elController.controller('EmployeeController', employeeController);
elController.controller('CourseController', courseController);

elController.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/Employee', {
            templateUrl: 'app/components/employee/empView.html',
            controller: 'EmployeeController'
        }).when('/Courses', {
            templateUrl: 'app/components/course/courseView.html',
            controller: 'CourseController'
        }).otherwise({
            redirectTo: '/'
        });;
    //configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});


//Register all the services in el.services module
elServices.service('EmployeeService', employeeService);
elServices.service('CourseService', courseService);
elServices.service('PageStateManagerService', pageStateManagerService);

