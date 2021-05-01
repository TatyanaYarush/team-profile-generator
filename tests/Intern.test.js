const Intern = require("../lib/Intern");

test("Test to set school via constructor", () => {
    const testschool = "Carleton";
    const testEmployee = new Intern("Tanya", 123, "test@gmail.com", testschool);
    expect(testEmployee.school).toBe(testschool);
});

test("getRole() Test should return \"Intern\"", () => {
    const testschool = "Intern";
    const testEmployee = new Intern("Tanya", 123, "test@gmail.com", "Carleton");
    expect(testEmployee.getRole()).toBe(testschool);
});

test("Test to get school via getSchool()", () => {
    const testschool = "Carleton";
    const testEmployee = new Intern("Tanya", 123, "test@gmail.com", testschool);
    expect(testEmployee.getSchool()).toBe(testschool);
});
