interface Teacher {
  firstName: string;
  fullTimeEmployee: boolean;
  lastName: string;
  location: string;
  contract: boolean;
  yearsOfExperience?:number;
}

interface Directors extends Teacher{
  numberOfReports: number;
}
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  contract: false,
};



// ----------------printTeacher function ------------



interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  let teacherName =`${firstName.charAt(0)}. ${lastName}`;
  console.log(teacherName)
  return teacherName
};
// -----------------Student Class-----
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
  firstName:string ;
  lastName:string;
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
// ------------results------------------
console.log("the director data",director1);

console.log("the teacher data",teacher3);
let result1 = printTeacher("omnia","eid");
const student: StudentClassInterface = new StudentClass("Jane", "Doe");
console.log(student.displayName()); 