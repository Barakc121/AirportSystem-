import Person from "./models/person.js";

class RegisteredPerson extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }

  welcome() {
    return `welcome${this.name}`;
  }
}

export default RegisteredPerson;