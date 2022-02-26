// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

/**
 * title - input
 * 
 * description -input
 * 
 * table of contents - hard-coded (will be the same)
 * 
 * installation
 * 
 * usage
 * 
 * license - options -badge @ top -notice @ bottom
 * 
 * contributing
 * 
 * tests
 * 
 * questions - include github UN and link, how to reach with questions
 */
// TODO: Create an array of questions for user input
const readmePrompt = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a breif description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Breifly describe the installation process for your project'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Breifly describe the usage of this project.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license are you using?',
      choices: [
        {name: 'Academic Free License v3.0'},
        {name: 'Apache license 2.0'},
        {name: 'Creative Commons'},
        {name: 'Educational Community License v2.0'},
        {name: 'GNU General Public License'},
        {name: 'ISC'},
        {name: 'MIT'},
        {name: 'Mozilla Public License 2.0'},
        {name: 'Open Software License 3.0'},
        {name: 'University of Illinois/NCSA Open Source License'}
      ]
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Briefly describe how to contribute to this project.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Briefly describe testing of the project.'
    },
    {
      type: 'input',
      name: 'ghName',
      message: 'What is your GitHub user name?'
    },
    {
      type: 'input',
      name: 'ghRepo',
      message: 'What is the GitHub repo url for this project?'
    },
    {
      type: 'input',
      name: 'qProtocol',
      message: 'What is the best way to reach you with questions? Is there a protocol for questions?'
    }
])};



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

function getLicenseBadge(answers) {
  switch (answers.license) {
    case 'Academic Free License v3.0':
      licenseBadge = `https://img.shields.io/badge/License-AFL-blue`
      licenseURL = `https://opensource.org/licenses/AFL-3.0`
      break;
    case 'Apache license 2.0':
      licenseBadge = `https://img.shields.io/badge/License-Apache-red`
      licenseURL = `https://www.apache.org/licenses/LICENSE-2.0`
      break;
    case 'Creative Commons':
      licenseBadge = `https://img.shields.io/badge/License-Creative_Commons-orange`
      licenseURL = `https://creativecommons.org/licenses/`
      break;
    case 'Educational Community License v2.0':
      licenseBadge = `https://img.shields.io/badge/License-ECL-green`
      licenseURL = `https://opensource.org/licenses/ECL-2.0`
      break;
    case 'GNU General Public License':
      licenseBadge = `https://img.shields.io/badge/License-GPLv3-red`
      licenseURL = `https://www.gnu.org/licenses/gpl-3.0.en.html`
      break;
    case 'ISC':
      licenseBadge = `https://img.shields.io/badge/License-ISC-green`
      licenseURL = `https://opensource.org/licenses/ISC`
      break;
    case 'MIT':
      licenseBadge = `https://img.shields.io/badge/License-MIT-brightgreen`
      licenseURL = `https://opensource.org/licenses/MIT`
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = `https://img.shields.io/badge/License-MOZ-blueviolet`
      licenseURL = `https://www.mozilla.org/en-US/MPL/2.0/`
      break;
    case 'Open Software License 3.0':
      licenseBadge = `https://img.shields.io/badge/License-OSL-green`
      licenseURL = `https://opensource.org/licenses/OSL-3.0`
      break;
    case 'University of Illinois/NCSA Open Source License':
      licenseBadge = `https://img.shields.io/badge/License-UIUC-red`
      licenseURL = `https://opensource.org/licenses/NCSA`
      break;
    default:
      licenseBadge = `https://img.shields.io/badge/License-NA-lightgrey`
      licenseURL = `https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository`;
  }
};

const readmeText = ( {projectName, ghRepo, license, description, installation, usage, contribution, tests, qProtocol, ghName} ) => {
  `# [${projectName}](${ghRepo})  [![${license}](${licenseBadge})](${licenseURL})
  
  ## Description
  ${description}
  
  ## Installation
  ${installation}
  
  ## Usage 
  ${usage}
  
  ## Contribution
  ${contribution}
  
  ## Tests
  ${tests} 
  
  ## Questions
  ${qProtocol}

  Feel free to follow or contact me at my GitHub page: [${ghName}](https://github.com/${ghName})
  
  
  ## Github Repository
  [${projectName}](${ghRepo})
  
  ## License 
  ${license}`
};

// // TODO: Create a function to initialize app
// function init() {}

const init = () => {
  readmePrompt()
  // getLicenseBadge(answers)
  .then((answers) =>   
  console.log(readmeText(answers, getLicenseBadge(answers))))
  // fs.writeFileSync('README.md', readmeText(answers, getLicenseBadge(answers))))
  // .then(() => console.log('Looks like we created a README.md...'))  
  // .catch((err) => console.error(err))
};

init();

// // Function call to initialize app
// init();


// inquirer
//   .prompt([
//     {
//         type: 'input',
//         name: 'projectName',
//         message: 'What is your project name?'
//     },
//     {
//       type: 'input',
//       name: 'description',
//       message: 'Write a breif description of your project:'
//     },
//     {
//       type: 'input',
//       name: 'installation',
//       message: 'Breifly describe the installation process for your project'
//     },
//     {
//       type: 'input',
//       name: 'usage',
//       message: 'Breifly describe the usage of this project.'
//     },
//     {
//       type: 'list',
//       name: 'licence',
//       message: 'What license are you using?',
//       choices: [
//         {name: 'Academic Free License v3.0'},
//         {name: 'Apache license 2.0'},
//         {name: 'Creative Commons'},
//         {name: 'Educational Community License v2.0'},
//         {name: 'GNU General Public License'},
//         {name: 'ISC'},
//         {name: 'MIT'},
//         {name: 'Mozilla Public License 2.0'},
//         {name: 'Open Software License 3.0'},
//         {name: 'University of Illinois/NCSA Open Source License'}
//       ]
//     },
//     {
//       type: 'input',
//       name: 'contribution',
//       message: 'Briefly describe how to contribute to this project.'
//     },
//     {
//       type: 'input',
//       name: 'tests',
//       message: 'Briefly describe testing of the project.'
//     },
//     {
//       type: 'input',
//       name: 'ghName',
//       message: 'What is your GitHub user name?'
//     },
//     {
//       type: 'input',
//       name: 'ghRepo',
//       message: 'What is the GitHub repo url for this project?'
//     },
//     {
//       type: 'input',
//       name: 'qProtocol',
//       message: 'What is the best way to reach you with questions? Is there a protocol for questions?'
//     }
// ]) .then((answers) => console.log(answers));
