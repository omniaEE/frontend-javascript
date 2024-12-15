interface DirectorInterface{
  workFromHome():string;
  getCoffeeBreak():string;
  workDirectorTasks():string;

}
interface TeacherInterface{
  workFromHome():string;
  getCoffeeBreak():string;
  workTeacherTasks():string;
}
class Director implements DirectorInterface{
  workFromHome():string{
    return "Working from home";
  }
  getCoffeeBreak():string{
    return "Getting a coffee break";
  }
  workDirectorTasks():string{
    return "Getting to director tasks";
  }
}
class Teacher implements TeacherInterface{
  workFromHome():string{
    return "Cannot work from home";
  }
  getCoffeeBreak():string{
    return "Cannot have a break";
  }
  workTeacherTasks():string{
    return "Getting to work";
  }
}
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

type Employee = Director | Teacher;
function isDirector(employee: Employee): employee is Director {
  return employee instanceof Director;
}
function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}
// --------------String literal types------
type Subjects = "Math" | "History";
function teachClass(todayClass:Subjects):string{
  let subject:string="";
  if (todayClass==="History"){
    subject="Teaching History"
  }
  else{
    subject="Teaching Math"
  }
  return subject;
}


console.log(createEmployee("$500"));
console.log(teachClass("Math")); 