import { Employee } from "./employee.js";

class Dev extends Employee {
  #jobType;

  constructor(id, salary) {
    super(id, salary);
    this.#jobType = "Dev";
  }

  getJobType() {
    return `I am a ${this.#jobType}`;
  }

  static returnArrayOfDevs(...args) {
    return args.filter((obj) => obj instanceof Dev);
  }
}
export { Dev };
