export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: newGrades.filter((grade) => grade.studentId === student.id).length > 0
        ? newGrades.filter((grade) => grade.studentId === student.id)[0].grade : 'N/A',
    }));
}
