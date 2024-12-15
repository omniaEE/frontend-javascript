namespace Subjects {
    // Assuming the Teacher interface is defined in another file, like `Teacher.ts`
    import { Teacher } from './Teacher.ts';
  
    export class Subject {
      private teacher: Teacher;
  
      // Setter method for teacher
      setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
      }
  
      // Method to get the teacher's name
      getTeacherName(): string {
        return `${this.teacher.firstName} ${this.teacher.lastName}`;
      }
    }
  }
  