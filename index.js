// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter project title",
  },
  {
    type: "input",
    name: "description",
    message: "Enter project description",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation details for the application",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter how the user can run this project's application",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter how a user can contribute to this repository project",
    //add user contribution element to this later
  },
  {
    type: "input",
    name: "tests",
    message: "Enter project test details",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your Email address",
  },
  {
    type: "input",
    name: "githubUserName",
    message: "Enter your Github username",
  },
  {
    type: "input",
    name: "credits",
    message: "List credits and users who have contributed to this project",
  },
  {
    type: "list",
    name: "license",
    message: "Enter the use of license within the project",
    choices: [
      "MIT",
      "Apache License 3.0",
      "GNU General Public License",
      "None",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function promptUser() {
  return inquirer.prompt(questions);
}

// Function to initiate app
function init() {
  promptUser()
    .then((answers) => generateMarkdown(answers))
    .then((data) => writeToFile("README.md", data))
    .then(() => console.log("README file successfully generated"))
    .catch((err) =>
      console.log("There was an issue encountered with your file", err)
    );
}

// Function call to initialize app
init();
