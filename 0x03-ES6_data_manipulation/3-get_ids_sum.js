function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((sum, num) => sum + num.id, 0);
}
export default getStudentIdsSum;
