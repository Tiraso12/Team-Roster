const inquirer = require('inquirer');


function startApp() {
    console.log("Welcome to the 'Build your team' app!");

    function createManager() {

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
            }
        ])
    }

    createManager()
}



startApp();
