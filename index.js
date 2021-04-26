const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const fs = require("fs");

const Logger = require("./logger");
const log = new Logger();

const generatePage = require();
const writeFile = require()

let manager = [];
let engineer = [];
let intern = [];
let employeeArr = {manager, engineer, intern};

function Prompt() {
    
  return inquirer
      .prompt([
      {
          type: 'list',
          name: 'role',
          message:"What is the employee's role in AWTY company?",
          choices: ['Manager', 'Engineer', 'Intern']
          // log.red(choices); ///add color???
           // if (choices) {
        
      },
      {
        type:'text',
        name: 'employee',
        message: "What is the employee's name?"
    },
    {
      type:'text',
      name: 'id',
      message: "What is the employee's ID number?"
  },
  {
      type: 'text',
      name: 'email',
      message: "What is the employee's email?"
  }])
  .then(({employee, id, email, role}) => {
    if (role === "Manager") {
        return inquirer
            .prompt([{
                type:'text',
                name: 'office',
                message:"What is the Manager's office number?"
            },




Prompt()
    .then(teamData => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })