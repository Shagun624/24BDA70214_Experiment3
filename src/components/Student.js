import Person from "./PersonHierarchy";

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  greet() {
    return `${super.greet()} I'm studying ${this.major}.`;
  }
}

export default Student;