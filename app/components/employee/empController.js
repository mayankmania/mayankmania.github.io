/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../app.module.js" />
/// <reference path="../../model/employee.js" />

function employeeController($scope, $filter, EmployeeService,PageStateManagerService) {
  //Variable declaration
  $scope.employee = {};
  
  $scope.selectedEducationInfo = {};
  

  
  //Initialization
  initialize();

  $scope.saveEmployee = function () {
    EmployeeService.save($scope.employee);
  };

  $scope.viewQualificationDetails = function (educationInfo) {
    resetEI();
    educationInfo.isSelected = true;
    angular.copy(educationInfo, $scope.selectedEducationInfo);
  };

  $scope.updateQualificationDetails = function () {
    //Update the record by finding the source in the original copy of educationalInfo
    var eI = getEI($scope.selectedEducationInfo.id);
    angular.copy($scope.selectedEducationInfo, eI);
    EmployeeService.save($scope.employee);
  };

  function initialize() {
    angular.copy(EmployeeService.get(), $scope.employee);
    setEI();
  };

  function setEI() {
    for (var index = 0; index < $scope.employee.educationalInfo.length; index++) {
      var educationalInfo = $scope.employee.educationalInfo[index];
      if (educationalInfo.isSelected != undefined && educationalInfo.isSelected) {
        angular.copy(educationalInfo, $scope.selectedEducationInfo);
        break;
      }
    }
  };

  function resetEI() {
    for (var index = 0; index < $scope.employee.educationalInfo.length; index++) {
      $scope.employee.educationalInfo[index].isSelected = false;
    }
  };

  function getEI(eIIndex) {
    for (var index = 0; index < $scope.employee.educationalInfo.length; index++) {
      if ($scope.employee.educationalInfo[index].id == eIIndex) {
        return $scope.employee.educationalInfo[index];
      }
    }
  };
}