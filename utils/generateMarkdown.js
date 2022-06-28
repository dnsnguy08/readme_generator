// variable for license link based off of user selection
let licenseLink = "";


// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`){
    licenseLink = `MIT License: https://choosealicense.com/licenses/mit/`;
  } else if (license === `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`){
    licenseLink = `GNU License: https://choosealicense.com/licenses/gpl-2.0/`;
  } else if (license === `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`){
    licenseLink = `BSD License: https://choosealicense.com/licenses/bsd-3-clause/`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data, accountInfo) {
  renderLicenseSection(data.license);
  return `# ${data.title}
  ${data.license}
  ## Description 
  ${data.description}
  ## Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Repository Link](#repository)
  - [Questions](#questions)
  ## Installation
          ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${licenseLink}
  ## Contributing
  ${data.contributing}
  ## Test
  ${data.test}
  ## Repository
  - [Project Repo](${data.repo})
  ## Questions
  For any questions, please reach out to:
  - ${accountInfo.name}
  - [GitHub Profile](${accountInfo.profile})
  - <${accountInfo.email}>  
`;
}

module.exports = generateMarkdown;
