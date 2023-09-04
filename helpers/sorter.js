function sortBySalary(users) {
  return users.sort((a, b) => {
    if (a.salary === b.salary) {
      return a.id - b.id; // Sort by id if salaries are equal
    }
    return a.salary - b.salary;
  });
}

export default sortBySalary;
