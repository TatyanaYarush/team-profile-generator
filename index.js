const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const Logger = require("./logger");
const log = new Logger();

const generatePage = require("./src/template-index")

let manager = [];
let engineer = [];
let intern = [];
let employeeArr = { manager, engineer, intern };

const promptEmp = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employee's role in the company?",
        choices: ["Manager", "Engineer", "Intern"],
       
      },
      {
        type: "text",
        name: "employee",
        message: "What is the employee's name?",
      },
      {
        type: "text",
        name: "id",
        message: "What is the employee's ID number?",
      },
      {
        type: "text",
        name: "email",
        message: "What is the employee's email?",
      },
    ])
    .then(({ employee, id, email, role }) => {
      if (role === "Manager") {
        return inquirer
          .prompt([
            {
              type: "text",
              name: "office",
              message: "What is the Manager's office number?", 
            },
            {
              type: "confirm",
              name: "anotherEntry",
              message:"Would you like to add another employee?",
              default: false,
            },
          ])
          .then(({ office, anotherEntry }) => {
            manager.push(new Manager(employee, id, email, office));
            // console.log(employeeArr);
            if (anotherEntry) {
              return promptEmp();
            }
          });
      } else if (role === "Engineer") {
        return inquirer
          .prompt([
            {
              type: "text",
              name: "github",
              message: "What is the Engineer's Github username?",
            },
            {
              type: "confirm",
              name: "anotherEntry",
              message: "Would you like to add another employee?",
            
            
              default: false,
            },
          ])
          .then(({ github, anotherEntry }) => {
            engineer.push(new Engineer(employee, id, email, github));
            // console.log(employeeArr)
            if (anotherEntry) {
              return promptEmp();
            }
          });
      } else if (role === "Intern") {
        return inquirer
          .prompt([
            {
              type: "text",
              name: "school",
              message: "What is the Intern's school?",
            },
            {
              type: "confirm",
              name: "anotherEntry",
              message: "Would you like to add another employee?",
            
              default: false,
            },
          ])
          .then(({ school, anotherEntry }) => {
            intern.push(new Intern(employee, id, email, school));
            // console.log(employeeArr)
            if (anotherEntry) {
              return promptEmp();
            }
          });
      }
    });
};

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => 
      err ? console.log(err) : log.magenta('Successfully created index.html!')
      );
  });
};

promptEmp()
    .then(teamData => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })