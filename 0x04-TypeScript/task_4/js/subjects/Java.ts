namespace Subjects {
    import { Teacher } from './Teacher';
  
    // Declaration merging: Add optional attribute `experienceTeachingJava`
    interface Teacher {
      experienceTeachingJava?: number;
    }
  
    export class Java extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for Java";
      }
  
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingJava) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  