describe("testing the sum function", () => {
  describe("testing only with numbers", () => {
    it("given whole numbers, I expect to receive their sum", () => {
      expect(sum(10, 20)).toBe(30);
    });

    it("given fraction numbers, I expect to receive their sum", () => {
      let s1 = 1 / 3;
      let s2 = 2 / 3;

      expect(sum(s1, s2)).toBe(1);
    });

    it("given negative numbers, I expect to receive their sum", () => {
      let s1 = -10;
      let s2 = -20;

      expect(sum(s1, s2)).toBe(-30);
    });
  });

  describe("testing with params different to number", () => {
    it("given wrong first parameter we must receive an error ", () => {
      let s1 = 10;
      let s2 = "z";

      expect(() => sum(s1, s2)).toThrowError();
    });

    it("given right parameters we must not receive an error ", () => {
      let s1 = 10;
      let s2 = 9999;

      expect(() => sum(s1, s2)).not.toThrowError();
    });
  });
});

describe("testing employee class", () => {
  it("I must receive a correct employee object", () => {
    let employee = new Employee("Borja", "Bernardez", 100000);

    expect(employee.name).toEqual("Borja");
    expect(employee.salary).toEqual(100000);
    expect(employee.salaryWithTaxes).toEqual(120000);
    expect(employee.surname).toEqual("Bernardez");

    expect(JSON.parse(JSON.stringify(employee))).toEqual({
      name: "Borja",
      salary: 100000,
      salaryWithTaxes: 120000,
      surname: "Bernardez"
    });
  });

  it("when getting the employee departments, I must receive an array", () => {
    let employee = new Employee("Borja", "Bernardez", 100000);
    let departments = employee.getDepartments();

    expect(departments.length).toBe(2);
    expect(departments.length).toBeGreaterThan(1);
    expect(departments).toEqual(["devops", "webdev"]);
  });
});
