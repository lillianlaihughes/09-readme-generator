// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter your Project Title.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your Project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions? (What command should be run to install dependencies?)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information? (What does the user need to know about using the repo?)',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines? (What does the user need to know about contributing to the repo?)',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions? (What command should be run to run tests?)',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project.',
        choices: ['Apache 2.0', 'MIT', 'GNU GPLv3', 'Creative Commons', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    return fs.writeFileSync('README.md', filename, data);
    // return fs.writeFileSync(path.join(process.cwd(), filename), data); 
    // cwd = current working directory 
    // REVIEW fs.writeFileSync doesn't require a callback param like fs.writeFile does
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log('Generating README file...')
        writeToFile('README.md', generateMarkdown({...answers})); // REVIEW ... rest/spread)        
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
