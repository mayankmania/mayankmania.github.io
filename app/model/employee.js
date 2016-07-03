function PersonInfo(name, cadre, extension) {
    this.name = name;
    this.cadre = cadre;
    this.extension = extension;
}

function EducationInfo(id,degree, university, year, percentage) {
    this.id=id;
    this.degree = degree;
    this.university = university;
    this.year = year;
    this.percentage = percentage;
}

function Employee(personInfo, educationalInfo) {
    this.personInfo = personInfo;
    this.educationalInfo = educationalInfo;
}