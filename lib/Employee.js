class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }

  // generateHtml()  {
  //   // read engineer.html
  //   // use regexp to fill template
  //   // return string
  //   return this.Employee
  // }
}

module.exports = Employee;
