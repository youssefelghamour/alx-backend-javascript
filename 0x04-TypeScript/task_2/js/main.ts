export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
}

export class Teacher implements TeacherInterface {
    workFromHome() {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak() {
      return 'Cannot have a break';
    }
  
    workTeacherTasks() {
      return 'Getting to work';
    }
  }

export function createEmployee(salary: number | string): (Director | Teacher) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

export function isDirector(employee: (Teacher | Director)) {
    if (employee instanceof Director) {
        return true;
    }
    return false;
}

export function executeWork(employee: (Teacher | Director)) {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));