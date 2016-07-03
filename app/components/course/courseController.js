/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../app.module.js" />

var courseController = function ($scope,CourseService) {
  $scope.course = {};
  angular.copy(CourseService.get(),$scope.course);
  $scope.saveCourse = function() {
    CourseService.save($scope.course);
  }
};