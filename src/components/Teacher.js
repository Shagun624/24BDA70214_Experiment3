import Person from "./PersonHierarchy";

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  greet() {
    return `${super.greet()} I teach ${this.subject}.`;
  }
}

export default Teacher;