function sum(s1, s2) {
  if (isNaN(s1) || isNaN(s2)) throw new Error(1001);

  return s1 + s2;
}

class Employee {
  constructor(name, surname, salary) {
    this.name = name;

    this.surname = surname;
    this.salary = salary;
    this.salaryWithTaxes = salary * 1.2;
  }

  getDepartments() {
    return ["devops", "webdev"]
  }
}
