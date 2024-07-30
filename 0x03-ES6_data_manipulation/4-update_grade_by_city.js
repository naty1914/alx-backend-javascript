function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((std) => std.location === city)
    .map((std) => {
      const newGrade = newGrades.find((grade) => grade.studentId === std.id);

      return {
        ...std,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
export default updateStudentGradeByCity;
