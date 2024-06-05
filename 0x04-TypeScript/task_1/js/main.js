"use strict";
exports.__esModule = true;
exports.StudentClass = exports.printTeacher = void 0;
function printTeacher(firstName, lastName) {
    return firstName[0] + ". " + lastName;
}
exports.printTeacher = printTeacher;
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
var teacher1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    contract: false
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(teacher1);
console.log(director1);
console.log(printTeacher("John", "Doe"));
var student1 = new StudentClass("ysf", "ghr");
console.log(student1.displayName());
console.log(student1.workOnHomework());
