//function render badge 

function renderLicenseBadge(license) {
    if (license !== "None") {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ''
  }
  // function render badge
  function renderLicenseLink(license) {
    if (license !== "None") {
      return (
        `\n* [License](#license)\n`
      )
    }
    return ''
  }
  
  function renderLicenseSection(license) {
    if (license !== "None") {
      return (
        `## License
  
  This project is licensed under the ${license} license.`
      )
    }
    return ''
  }
  // function to generate markdown 
  function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  //description  
  ${data.description}
  description =`## description\n\n${data.description} \n\n`;
  
 //Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  if(data.usage) {
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  }
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
    
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  if(data.githubUsername || data.emailaddress)
  If you have any questions about the repo, open an issue or contact me directly at ${data.emailmecalvin@gmail.com}. You can find more of my work at [${data.https://github.com/emailmecalvin128}](https://github.com/${data.https://github.com/emailmecalvin128}/).
  
  `;
  }
  
  module.exports = generateMarkdown;