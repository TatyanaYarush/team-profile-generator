const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Test to set office number via constructor", () => {
    const testmanager = 555-555;
    const testEmployee = new Manager("Tanya", 123, "test@gmail.com", testmanager);
    expect(testEmployee.officeNumber).toBe(testmanager);
});

test("getRole() Test should return \"Manager\"", () => {
    const testmanager = "Manager";
    const testEmployee = new Manager("Tanya", 123, "test@gmail.com", 555-555);
    expect(testEmployee.getRole()).toBe(testmanager);
});

test("Test to get office number via getOffice()", () => {
    const testmanager = 555-555;
    const testEmployee = new Manager("Tanya", 123, "test@gmail.com", testmanager);
    expect(testEmployee.getOfficeNumber()).toBe(testmanager);
});
