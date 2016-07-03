'use strict'

function Course(name, summary, timings, speaker, startDate, endDate) {
    this.name = name;
    this.summary = summary;
    this.timings = timings;
    this.speaker = speaker;
    this.startDate = startDate;
    this.endDate = endDate;
}

function CourseModel(myCourses, availableCourses) {
    this.myCourses = myCourses;
    this.availableCourses = availableCourses;
}