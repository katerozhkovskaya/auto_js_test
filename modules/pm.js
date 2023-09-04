import { Employee } from "./employee.js";

class PM extends Employee {
    #jobType;

  constructor(id, salary) {
    super(id, salary);
    this.#jobType = "PM"
  }

  getJobType() {
    return `I am a ${this.#jobType}`; 
  }
}

export { PM };
