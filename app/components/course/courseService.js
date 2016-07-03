/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../app.module.js" />
/// <reference path="../../model/course.js" />

//Get data from real service
var courseService = function ($http) {
    this.get = function () {
        this.course = this.course || intialize();
        return this.course;
    };

    this.save = function (course) {
        this.course = course;
    };

    //If course data not present get it from service (Web API)
    var intialize = function () {
        var myCourses = [new Course('Azure IOT', 'Azure Cloud Services Platform For IOT', '9am to 12Pm', 'External', '24/10/2016', '30/10/2016')];
        var availableCourses = [
            new Course('ASP.NET', 'ASP.NET 4.0', '9am to 12Pm', 'External', '10/08/2016', '20/08/2016'),
            new Course('Azure IOT', 'Azure Cloud Services Platform For IOT', '9am to 12Pm', 'External', '24/10/2016', '30/10/2016')];
        return new CourseModel(myCourses, availableCourses);
    };
}