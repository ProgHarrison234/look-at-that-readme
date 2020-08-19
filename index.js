const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

async function promptUser() {
    let userPrompt = await inquirer.prompt([
    {
        type: "input",
        name: "gitHubU",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "gitHubE",
        message: "What is your GitHub email?"
    },
    {
        type: "input",
        name: "projectT",
        message: "What is your Project Title?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project: "
    },
    {
        type: "input",
        name: "contributions",
        message: "Enter the GitHub usernames that contributed: "
    },
    {
        type: "input",
        name: "install",
        message: "Steps to get the application going."
    },
    {
        type: "input",
        name: "uses",
        message: "What uses does this project have?"
    },
    {
        type: "input",
        name: "technologies",
        message: "What technologies are used?"
    }
])
.then( answers => {
    const readMeFile = generateReadMe(answers);

    writeFileAsync("README.md", readMeFile);
    
    // Title
    // Description
    // Table of Contents
    // Installation
    // Usage
    // License
    // Contributing
});
}
function generateReadMe (answers) {
    return `# ${answers.projectT}

## Program Description
${answers.description}

## Table of Contents 
1. Product Title and Description
2. Table of Contents
3. Uses
4. Installation
5. Technologies
6. Contributors
7. Contact

## Uses
${answers.uses}

## Installation
Below is how you install and run the program
${answers.install}

## Techonologies
The Technologies are as follows:
${answers.technologies}

## Contributors
${answers.contributions}

## Contact Me
My GitHub username is ${answers.gitHubU},
Feel free to contact me at ${answers.gitHubE}
`;
}
promptUser();

