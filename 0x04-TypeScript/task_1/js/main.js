"use strict";
exports.__esModule = true;
exports.printTeacher = void 0;
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
function printTeacher(firstName, lastName) {
    return firstName[0] + ". " + lastName;
}
exports.printTeacher = printTeacher;
console.log(teacher1);
console.log(director1);
console.log(printTeacher("John", "Doe"));
