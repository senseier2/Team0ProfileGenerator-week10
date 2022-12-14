const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateHTML = require('./src/template.js')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const folder_dir = path.resolve("./dist", "output");
const outputPath = path.join(folder_dir, "team.html");

const teamMembers = [];


const managerPrompt = () => {
    return inquirer.prompt([
            {
            name: 'managerName',
            type: 'input',
            message: 'Please type your managers name',
            validate: nameIn => {
                if (nameIn) {
                    return true;
                } else {
                    console.log("Please enter the Manager's name.")
                }
            }
            },
            {
            name: 'employeeId',
            type: 'input',
            message: 'Employee ID',
            validate: idIn => {
                if (isNaN(idIn)) {
                    console.log ('Please try entering the ID again.')
                    return false;
                } else {
                    return true;
                }
            }
            },
            {
            name: 'email',
            type: 'input',
            message: 'Please type their email address',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter the Manager's email.")
                    return false;
                }
            }
            },
            {
            name: 'officeNumber',
            type: 'input',
            message: 'What is their office number',
            validate: officeIn => {
                if (isNaN(officeIn)) {
                    console.log ("Please try entering the Manager's office number again.")
                    return false;
                } else {
                    return true;
                }
            }
            },

    ]).then(responses => {
        console.log('|----------|')
        console.log(responses);
        const manager = new Manager(responses.managerName, responses.employeeId, responses.email, responses.officeNumber)
        teamMembers.push(manager);
        
        addTeam();
    })
}


function addTeam() {

inquirer.prompt([{
    type: 'list',
    message: 'What type of employee would you like to add to your team?',
    name: 'addEmployeePrompt',
    choices: ['Manager', 'Engineer', 'Intern', 'Team is completed!']

}]).then(function (userInput){
    switch(userInput.addEmployeePrompt) {
        case "Manager":
            managerPrompt();
            break;
        case "Engineer":
            engineerPrompt();
            break;
        case "Intern":
            internPrompt();
            break;
        default:
            teamCompleted();
            console.log("Awesome work! Visit the output folder to see your team!")
        
    }

})
}

function engineerPrompt() {
   return inquirer.prompt([
        {
        name: 'engineerName',
        type: 'input',
        message: 'What is the name of the engineer',
        validate: nameIn => {
            if (nameIn) {
                return true;
            } else {
                console.log("Please enter the Engineer's name.")
            }
        }
        },
        {
        name: 'employeeId',
        type: 'input',
        message: 'Employee ID',
        validate: idIn => {
            if (isNaN(idIn)) {
                console.log ('Please try entering the ID again.')
                return false;
            } else {
                return true;
            }
        }
        },
        {
        name: 'email',
        type: 'input',
        message: 'Please type their email address',
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log("Please enter the Engineer's email.")
                return false;
            }
        }
        },
        {
        name: 'github',
        type: 'input',
        message: 'Type their github username',
        validate: nameIn => {
            if (nameIn) {
                return true;
            } else {
                console.log("Please enter the Engineer's name.")
            }
        }
        },
    ])
    .then(responses => {
        console.log(responses)
        const engineer = new Engineer(responses.engineerName, responses.employeeId, responses.email, responses.github)
        teamMembers.push(engineer);
        addTeam();
    })
}

function internPrompt() {
   return inquirer.prompt([
        {
        name: 'internName',
        type: 'input',
        message: 'Please type your Interns name',
        validate: nameIn => {
            if (nameIn) {
                return true;
            } else {
                console.log("Please enter the Intern's name.")
            }
        }
        },
        {
        name: 'employeeId',
        type: 'input',
        message: 'Employee ID',
        validate: idIn => {
            if (isNaN(idIn)) {
                console.log ('Please try entering the ID again.')
                return false;
            } else {
                return true;
            }
        }
        },
        {
        name: 'email',
        type: 'input',
        message: 'Please type their email address',
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log("Please enter the Intern's email.")
                return false;
            }
        }
        },
        {
        name: 'school',
        type: 'input',
        message: 'Please enter the school name',
        validate: schoolIn => {
            if (schoolIn) {
                return true;
            } else {
                console.log("Please enter the name of the School.")
            }
        }
        },
    ])
    .then(responses => {
        console.log(responses)
        const intern = new Intern(responses.internName, responses.employeeId, responses.email, responses.school)
        teamMembers.push(intern);
        addTeam();
    })
}

const teamCompleted= () => {
// Outputting team to a team directory
if (!fs.existsSync(folder_dir)) {
    fs.mkdirSync(folder_dir)
}
fs.writeFileSync(outputPath, generateHTML(teamMembers), "utf-8")

}



managerPrompt();
