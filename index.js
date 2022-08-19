//NPM needed for the app
const inquirer = require('inquirer');


function startApp() {
    console.log(
`==================================================
        Welcome to the 'Build your team' app!
===================================================
     `);

    function createManager() {
//prompts for the manager
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the Manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the name.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the Manager's ID number?",
                validate: managerId => {
                    if (managerId) {
                        return true;
                    }
                    return "Please enter an ID number";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the Manager's e-mail address?",
                validate: managerEmail => {
                    if (managerEmail) {
                        return true;
                    }
                    return "Please enter an ID number";
                }
            },
            {
                type: "input",
                name: "managerOffice",
                message: "What is the Manager's office Number?",
                validate: managerEmail => {
                    if (managerEmail) {
                        return true;
                    }
                    return "Please enter an office number";
                }
            }
        ]).then(answers => {
            // console.log(answers);

            createTeam();
        })

        function createTeam() {
            
            return inquirer.prompt([
                {
                    type:"list",
                    name:"memberChoice",
                    message:"Which member would you like to add to the team?",
                    choices:[
                        "Enginer",
                        "Inter",
                        "Finish Building my Team"
                    ]
                }
            ]).then(answer =>{
                console.log(answer);
            })
        }
    }

    createManager()
}


//launch the app
startApp();
