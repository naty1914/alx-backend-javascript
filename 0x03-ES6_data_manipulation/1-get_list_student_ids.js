function getListStudentIds(getListStudents) {
  if (Array.isArray(getListStudents)) {
    return getListStudents.map((num) => num.id);
  }
  return [];
}

export default getListStudentIds;
