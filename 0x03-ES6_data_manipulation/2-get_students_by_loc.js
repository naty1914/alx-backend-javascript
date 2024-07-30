function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((num) => num.location === city);
}

export default getStudentsByLocation;
