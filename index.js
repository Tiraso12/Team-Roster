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
                    type: "list",
                    name: "memberChoice",
                    message: "Which member would you like to add to the team?",
                    choices: [
                        "Enginer",
                        "Inter",
                        "Finish Building my Team"
                    ]
                }
            ]).then(userSelection => {
                console.log(userSelection);
                switch (userSelection.memberChoice) {
                    case "Enginer":
                        createEngineer();
                        break;
                    case "Inter":
                        createInter();
                        break;
                    default:
                        break;
                }
            })
        }
    }

    function createEngineer() {

        console.log(`
================================
         ADD AN ENGINEER
================================`);
        return inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Please provide the Engineer's name",
                validate: engineerName => {
                    if (engineerName) {
                        return true;
                    }
                    return "Please provide a Name";
                }
            },
            {
                type:"input",
                name:"engineerId",
                message:"Please provide an Engineer ID",
                validate: engineerName =>{
                    if(engineerName){
                        return true;
                    }
                    return "Please provide a valid ID";
                }
            },
            {
                type:"input",
                name:"engineerEmail",
                message:"Please provide an e-mail address",
                validate: engineerEmail =>{
                    if(engineerEmail){
                        return true;
                    }
                    return "Please provide a valid e-mail address";
                }
            },
            {
                type:"input",
                name:"engineerGithub",
                message:"Please provide a Github username",
                validate: engineerGithub =>{
                    if(engineerGithub){
                        return true;
                    }
                    return "Please provide a valid Github username";
                }
            }
        ]).then(answers=>{
            console.log(answers);
            createTeam()
        })
    };

    function createInter() {
        console.log(`
        ================================
                 ADD AN INTERN
        ================================`);
                return inquirer.prompt([
                    {
                        type: "input",
                        name: "internName",
                        message: "Please provide the Intern's name",
                        validate: internName => {
                            if (internName) {
                                return true;
                            }
                            return "Please provide a Name";
                        }
                    },
                    {
                        type:"input",
                        name:"interId",
                        message:"Please provide an intern ID",
                        validate: internName =>{
                            if(internName){
                                return true;
                            }
                            return "Please provide a valid ID";
                        }
                    },
                    {
                        type:"input",
                        name:"internEmail",
                        message:"Please provide an e-mail address",
                        validate: internEmail =>{
                            if(internEmail){
                                return true;
                            }
                            return "Please provide a valid e-mail address";
                        }
                    },
                    {
                        type:"input",
                        name:"internSchool",
                        message:"Please provide a School's name",
                        validate: internSchool =>{
                            if(internSchool){
                                return true;
                            }
                            return "Please provide a valid school name";
                        }
                    }
                ]).then(answers=>{
                    console.log(answers);
                    createTeam()
                })
    }


    createManager()
}


//launch the app
startApp();
