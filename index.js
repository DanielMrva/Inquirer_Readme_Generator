// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Prompts built into a function, runs through basic questions to generate Readme
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
      message: 'Write a breif description of your project.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Breifly describe the installation process for your project.'
    },
    {
    type: 'confirm',
    name: 'installPic',
    message: 'Do you want to include a screenshot with this section?',
    },
    {
    type: 'input',
    name: 'installPicDir',
    message: 'What is the relative link or url link of your screenshot?',
    when(answers) {
      return answers.installPic;
      },
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Breifly describe the usage of this project.'
    },
    {
      type: 'confirm',
      name: 'usagePic',
      message: 'Do you want to include a screenshot with this section?',
    },
    {
      type: 'input',
      name: 'usagePicDir',
      message: 'What is the relative link or url link of your screenshot?',
      when(answers) {
        return answers.usagePic;
        },
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license are you using?',
      choices: [
        'Academic Free License v3.0',
        'Apache license 2.0',
        'Creative Commons',
        'Educational Community License v2.0',
        'GNU General Public License',
        'ISC',
        'MIT',
        'Mozilla Public License 2.0',
        'Open Software License 3.0',
        'University of Illinois/NCSA Open Source License'
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

//This function checks the answers for the license entry, runs it through a switch, and returns a url for a license badge as well as a url for the license itself.
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
  return [licenseBadge, licenseURL]
};

//This is a deconstruction of the answers object, which is then parsed into the long template literal which provides the README format.
const readmeText = ( {projectName, ghRepo, license, description, installation, installPicDir, usage, usagePicDir, contribution, tests, qProtocol, ghName} ) => 
  `# [${projectName}](${ghRepo}) [![${license}](${licenseBadge})](${licenseURL})
  
  ## Description
  ${description}

  ## Table of Conents
   1. [Installation](#installation)
   1. [Usage](#usage)
   1. [Contribution](#contribution)
   1. [Tests](#tests)
   1. [Questions](#questions)
   1. [Github Repository](#github-repository)
   1. [License](#license)
  
  ## Installation
  ${installation}

  ![](${installPicDir})
  
  ## Usage 
  ${usage}

  ![](${usagePicDir})

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
  ${license}`;

//initialization function runs the readmePrompt function, then takes in 
const init = () => {
  readmePrompt()
//checks to see if there is a dir with the name of the project, then if not, creates a dir with the name of the project 
  .then((answers) => {
    let dir = `${answers.projectName}`
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(`${answers.projectName}`)
    }return answers
  })
//file writing section
  .then((answers) =>
  fs.writeFileSync(`./${answers.projectName}/README.md`, readmeText(answers, getLicenseBadge(answers))))
  .then(() => console.log('Looks like we created a README.md...'))
  .catch((err) => console.error(err))
};

//calls init function on app start.
init();

