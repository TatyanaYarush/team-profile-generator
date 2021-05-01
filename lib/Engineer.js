const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return this.role;
  }

  // generateHtml()  {
  //   return this.Employee
  // }
}

module.exports = Engineer;
