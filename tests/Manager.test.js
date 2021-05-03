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

test("Test to create Manager Object with all the parameters", () => {
    const x = new Manager("tat7res5", 715, "test3@tanya.com", 555-555);
    expect(typeof(x.name)).toBe("string");
    expect(typeof(x.id)).toBe("number");
    expect(typeof(x.email)).toBe("string");
    expect(typeof(x.officeNumber)).toBe("number");
});