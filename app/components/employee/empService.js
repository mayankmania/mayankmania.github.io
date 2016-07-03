/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../app.module.js" />
/// <reference path="../../model/employee.js" />

//Get data from real service
var employeeService = function ($http) {

    this.get = function () {
        this.employee = this.employee || intialize();
        return this.employee;
    };

    this.save = function (employee) {
        this.employee = employee;
    };

    //If employee data not present get it from service (Web API)
    var intialize = function () {
        var personInfo = new PersonInfo('Mayank', 'A12', '3095');
        var eI = [new EducationInfo('1', 'MCA', 'Mumbai', '2010', '72'), new EducationInfo('2', 'BSc Computers', 'Mumbai', '2007', '63')];
        var employee = new Employee(personInfo, eI);
        return employee;
    };
};
