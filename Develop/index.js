// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let generateMarkdown = require('./utils/generateMarkdown');
let fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'Please enter your application title?'
  },

  {
    type: 'input',
    name: 'description',
    message: 'Please give a brief description of your application'
  },

  {
    type: 'input',
    name: 'instructions',
    message: 'Please enter any instructions the user need to access the aplication'
  },

  {
    type: 'input',
    name: 'userStory',
    message: 'Please desribe the users experience as they go through the application'
  },

  {
    type: 'input',
    name: 'credits',
    message: 'What applications did you use to build this program?'
  },

  {
    type: 'list',
    name: 'license',
    message: 'Please select one of the following licenses',
    choices: ["MIT License", "GNU General Public License v2", "GNU General Public License v3", "Apache License 2.0", "ISC License"]
  },

  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username'
  },

  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email'
  },
];



// TODO: Create a function to write README file


 function writeToFile(fileName, data) {
   let readMe = `#${data.title}
   # ${data.title}  
    ## Description
    ${data.description}
    ## Table of Contents
    1. Instructions
    2. User Story
    3. Credits
    4. License
    5. Questions 

    ## Instructions
    ${data.instructions}
    ## User Story
    ${data.userStory}
    ## Credits
    ${data.credits}
    ## License
    ${data.license}
    ## Contact
    Please contact me at ${data.email} or find me on Github ${data.github}(https://github.com/${data.github}). 
   `
   fs.writeFileSync('README.md', readMe)
 }


// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      try{
        const file = writeToFile("README.md", data);
        console.log("Successfully wrote a readme file")
      } catch(error) {
        console.log(error)
      }
      
    });

}


// Function call to initialize app
init();
