// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[License](https://img.shields.io/badge/license-${license}-blue.svg)`; 
    // add url and insert ${} for license name
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project is licensed under the ${license} license.`;
   }
  return '';
}

// TODO: Create a function to generate markdown for README
// note to me: insert back slashes to render back-ticks properly due to template literals

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests] (#tests)

* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
\`\`\` 
${data.installation}
\`\`\`

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
To run tests, run the following command:
\`\`\` 
${data.test}
\`\`\`

## Questions
If you have any questions about this repo, open an issue or send a message to ${data.email}. You can find more of my work at [Github: ${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
