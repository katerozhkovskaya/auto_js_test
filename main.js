import { Dev } from "./modules/dev.js";
import { PM } from "./modules/pm.js";
import { Employee } from "./modules/employee.js";
import sortBySalary from "./helpers/sorter.js";

const dev = new Dev(1, 2000);
const pm = new PM(2, 2500);
const dev2 = new Dev(3, 2000);
console.log(dev.getJobType()); // Output: I am a Dev
console.log(pm.getJobType()); // Output: I am a PM
console.log(Employee.compareSalary(dev, pm)); // Output: User with id 2 has greater salary
console.log(Employee.compareSalary(dev, dev2)); // Output: salaries are equal

const newDev = new Dev(1, 3000);

Object.defineProperty(newDev, "id", {
  writable: false,
  configurable: false,
});

// Uncommenting these lines will demonstrate the read-only behavior of the 'id' property
// newDev.id = 15; // TypeError: Cannot assign to read only property 'id' of object '#<Dev>'
// delete newDev.id; // TypeError: Cannot delete property 'id' of #<Dev>

for (let key in newDev) {
  console.log(newDev[key]); // Output: 1 and 3000
}

const user1 = new Dev(1, 2000);
const user2 = new Dev(2, 1500);
const user3 = new Dev(3, 1000);
const user4 = new Dev(4, 2000);
const user5 = new Dev(6, 2500);
const user6 = new Dev(5, 2500);
const user7 = new PM(7, 3500);
const user8 = new PM(8, 1000);
const users = Dev.returnArrayOfDevs(
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8
);

console.log(sortBySalary(users));
/*
виведе [
  Dev { id: 3, salary: 1000 },
  Dev { id: 2, salary: 1500 },
  Dev { id: 1, salary: 2000 },
  Dev { id: 4, salary: 2000 },
  Dev { id: 5, salary: 2500 },
  Dev { id: 6, salary: 2500 }
]
*/
