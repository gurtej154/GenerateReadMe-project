// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Project title",
    message: "Enter project title",
  },
  {
    type: "input",
    name: "Project description",
    message: "Enter project description",
  },
  {
    type: "input",
    name: "installation process",
    message:
      "Enter applications that need to be installed for the project to run?",
  },
  {
    type: "input",
    name: "Utilisation of application",
    message: "Enter how the user can run this project's application",
  },
  {
    type: "input",
    name: "Contribution to the project",
    message: "Enter Contributors user names",
    //add user contribution element to this later
  },
  {
    type: "input",
    name: "project tests",
    message: "Enter project test details",
  },
  {
    type: "list",
    name: "Use of license type",
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}
inquirer
  .prompt(questions)
  .then((answers) => {
    fs.writeFileSync("README.md", generateMarkdown(answers));
  })
  .then(() => {
    console.log("Read me successfully generated!");
  });
if (err) {
  console.log("There was an error encountered while generating this file");
  console.log(err);
  return;
}

// Function call to initialize app
init();
