# 09 Node.js Challenge: Professional README Generator

## Motivation
In order to learn the ins and outs of Node.js, we were challenged to create a README Generator to be run from the command line interface (CLI) so that users can quickly build a README markdown file that meets professional guidelines.

This CLI application creates a README.md file from user input and featuring a basic format that includes all the sections recommended (Project Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions). This saves the user time and brain power so they can focus on coding!

I learned a lot in our Node.js module, which deepened my understanding (and at times appreciation) of the material in our earlier modules. I utilized the new skills and tools, like the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4), to build and test this project.

## Instructions
The application can be invoked by using the following command in your CLI:

```
node index.js
```
The sample README.md will output to the 'readme_output' folder.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## 

## Review

You are required to submit the following for review:

* A walkthrough video demonstrating the functionality of the application.

* A sample README.md file for a project repository generated using your application

* The URL of the GitHub repository, with a unique name and a README describing the project
