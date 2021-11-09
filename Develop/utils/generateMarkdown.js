// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    return "![License:MIT](https://img.shields.io/badge/MIT-License-yellowgreen)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }
  return "[MIT License](#license)(https://opensource.org/licenses/MIT$)";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `## License
  [${license} License](LICENSE)`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license);
  const LicenseBadge = renderLicenseBadge(data.license);
  const LicenseLink = renderLicenseLink(data.license);
  const LicenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  - [credits](#credits)

  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Any questions regarding the project and the repository itself, please reach out via ${data.email}. You can also checkout of my [Github Profile](https://github.com/${data.githubUserName}). 

  ## License
  ${LicenseBadge}
  ${LicenseSection}

  ## Credits
  ${data.credits}

`;
}

module.exports = generateMarkdown;
