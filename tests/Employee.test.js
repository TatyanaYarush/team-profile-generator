const Employee = require("../lib/Employee");

test("Test instantiate Employee instance", () => {
	const testEmployee = new Employee();
	expect(typeof testEmployee).toBe('object');
});

test("Test to use name function", () => {
    const testEmployee = new Employee("Tanya");
    expect(testEmployee.getName()).toBe("Tanya")
})

test("Test to use ID function", () => {
    const testEmployee = new Employee("Tanya", 123);
    expect(testEmployee.getId()).toBe(123)
})

test("Test to use email function", () => {
    const testEmployee = new Employee("Tanya", 123, "test@gmail.com");
    expect(testEmployee.getEmail()).toBe("test@gmail.com")
})

test("Test to use role function", () => {
    const testEmployee = new Employee("Tanya", 123, "test@gmail.com", );
    expect(testEmployee.getRole()).toBe("Employee")
})

// Exception test
// test("Test to use name function", () => {
//     const testEmployee = new Employee("Tanya");
//     expect(testEmployee.getName()).toBe("Tanya")

    
// it("should throw an error if not provided a 'text' value", () => {
//     // Arrange
//     const testEmployee = () => new Employee();
//     const err = new Error(
//       "Expected parameter 'text' to be a non empty string"
//     );

//     // Assert
//     expect(testEmployee).toThrowError(err);
//     })

// })
