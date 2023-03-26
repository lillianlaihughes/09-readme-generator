// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project-title',
        message: 'Enter your Project Title.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your Project.',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },    
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    }
];

// TODO: Create a function to write README file
// ask DMG about fs.writeFile versus this
function writeToFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data); 
    // cwd = current working directory 
    // REVIEW writeFileSync doesn't require a callback param like writeFile does
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((inquirerResponses) => {
        console.log('Generating README file...')
        writeToFile('README.md', generateMarkdown({...inquirerResponses})); // REVIEW ... rest/spread
        })
}

// Function call to initialize app
init();



// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'checkbox',
//       message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
//   ])
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });
