var employeeDetails = function($scope,EmployeeService) {
    var employee = EmployeeService.get();
    $scope.employee = employee;
}