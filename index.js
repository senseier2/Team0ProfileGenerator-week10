const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateHTML = require('./src/template')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const OUTPUT_DIR = path.resolve(_dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMember = [];


const managerPrompt = () => {
    return inquirer.prompt([
            {
            name: 'mangerName',
            type: 'input',
            message: 'Please type your managers name',
            },
            {
            name: 'employeeId',
            type: 'input',
            message: 'Employee ID',
            },
            {
            name: 'email',
            type: 'input',
            message: 'Please type their email address',
            },
            {
            name: 'officeNumber',
            type: 'input',
            message: 'What is their office number',
            },
    ])

    .then(responses => {
        console.log(responses);
        const manager = new Manager(responses.managerName, response.employeeId, responses.email, responses.officeNumber)
        teamMembers.push(manager);
        
        addTeam();
    })
}


function addTeam() {

inquirer.prompt([{
    type: 'list',
    message: 'What type of employee would you like to add to your team?',
    name: 'addEmployeePrompt',
    choice: ['Manager', 'Engineer', 'Intern', 'Im finished']

}]).then(function (userInput){
    switch(userInput.addEmployeePrompt) {
        case "Manager":
            addManager();
            break;
        case "Engineer":
            addEngineer();
            break;
        case "Intern":
            addIntern();
            break;
        default:
            console.log('please select a team member');
        
    }

})
}

function engineerPrompt() {
    inquirer.prompt([
        {
        name: 'engineerName',
        type: 'input',
        message: 'What is the name of the engineer',
        },
        {
        name: 'employeeId',
        type: 'input',
        message: 'Employee ID',
        },
        {
        name: 'email',
        type: 'input',
        message: 'Please type their email address',
        },
        {
        name: 'github',
        type: 'input',
        message: 'What is their github username',
        },
    ])
    .then(responses => {
        console.log(engineer)
        const engineer = new Engineer(responses.engineerName, response.employeeId, responses.email, responses.github)
        teamMembers.push(engineer);
        addTeam();
    })
}

function internPrompt() {
    inquirer.prompt([
        {
        name: 'manger name',
        type: 'input',
        message: 'Please type your managers name',
        },
        {
        name: 'employee id',
        type: 'input',
        message: 'Employee ID',
        },
        {
        name: 'email',
        type: 'input',
        message: 'Please type their email address',
        },
        {
        name: 'school',
        type: 'input',
        message: 'Please enter the school name',
        },
    ])
    .then(responses => {
        console.log(intern)
        const intern = new Intern(responses.internName, response.employeeId, responses.email, responses.school)
        teamMembers.push(manager);
        addTeam();
    })
}



managerPrompt();
