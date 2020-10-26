const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//array of questions for user
const questions = [
    {
        type: "input",
        name: "install",
        message: " Enter text for the install?"
    }, {
        type: "input",
        name: "email",
        message: "what is your email address?"
    },
    {
        type: "input",
        name: "name",
        message: "what is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "description of your project"
    },
    {
        type: "list",
        name: "license",
        message: "what kind of license do you want?"
        choice: ["ISC", "MIT", "APACHE v2.0", "BSD v3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "what command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "Github",
        message: "what is your github username?",
        default: "blank"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email address?",
    }
];
// function to write README file 
function writetoFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    if (err) {
        return console.log (err);
    }
; 

}
// function to initialize program 
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponses) => {
            console.log("Generating README...");
            writetoFile("README.md", generateMarkdown({ ...inquirerResponses }));
        })
}
// function to initialize program 
init();