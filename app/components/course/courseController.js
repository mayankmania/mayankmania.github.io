/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../app.module.js" />

var courseController = function ($scope,CourseService) {
  $scope.course = {};
  angular.copy(CourseService.get(),$scope.course);
  $scope.selectedTab = "MyCourse";
  
  $scope.getSelectedSection = function (selectedSection) {
    if (PageStateManagerService.getState(selectedSection) == undefined) {
      PageStateManagerService.getState(selectedSection) = "MyCourse";
    }
    $scope.selectedTab = PageStateManagerService.getState(selectedSection);
  };

  $scope.setSelectedSection = function (selectedSection, selectedValue) {
    PageStateManagerService.setState(selectedSection, selectedValue);
    $scope.selectedTab = PageStateManagerService.getState(selectedSection);
  };

  $scope.saveCourse = function() {
    CourseService.save($scope.course);
  }
};