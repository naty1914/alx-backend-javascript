
export const cpp = new Subjects.Cpp({
    firstName: 'Daniel',
    lastName: 'Solomon',
    experienceTeachingC: 10
  });
  
  export const java = new Subjects.Java({
    firstName: 'Daniel',
    lastName: 'Solomon',
    experienceTeachingJava: 10
  });
  
  export const react = new Subjects.React({
    firstName: 'Daniel',
    lastName: 'Solomon',
    experienceTeachingReact: 10
  });
  
  export const cTeacher: Subjects.Teacher = {
    firstName: 'Daniel',
    lastName: 'Solomon',
    experienceTeachingC: 10
  };
  
  console.log('C++');
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  console.log('Java');
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  console.log('React');
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
  