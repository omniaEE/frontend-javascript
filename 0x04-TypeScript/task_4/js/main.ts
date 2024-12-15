import { cpp, java, react, cTeacher } from './constants';

// Setting the teacher for Cpp subject
cpp.setTeacher(cTeacher);
console.log('C++');
console.log(cpp.getRequirements());         // Output: Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher());     // Output: Available Teacher: John

// Setting the teacher for Java subject
java.setTeacher(cTeacher);
console.log('Java');
console.log(java.getRequirements());         // Output: Here is the list of requirements for Java
console.log(java.getAvailableTeacher());     // Output: Available Teacher: John

// Setting the teacher for React subject
react.setTeacher(cTeacher);
console.log('React');
console.log(react.getRequirements());        // Output: Here is the list of requirements for React
console.log(react.getAvailableTeacher());    // Output: Available Teacher: John
