/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../app.module.js" />

var courseController = function ($scope, CourseService, PageStateManagerService) {
  $scope.course = {};

  angular.copy(CourseService.get(), $scope.course);

  $scope.getSelectedSection = function (selectedSection) {
    if (PageStateManagerService.getState(selectedSection) == undefined) {
      PageStateManagerService.setState(selectedSection, "MyCourse");
    }
    return PageStateManagerService.getState(selectedSection);
  };

  $scope.setSelectedSection = function (selectedSection, selectedValue) {
    PageStateManagerService.setState(selectedSection, selectedValue);
  };

  $scope.saveCourse = function () {
    CourseService.save($scope.course);
  }
};