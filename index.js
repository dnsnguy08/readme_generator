// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
    {
        message: "What is your project title?",
        name: "title",
        type: "input",
    },
    {
        message: "Please provide your project's description",
        name: "description",
        type: "input",
    },
    {
        message: "Please provide the installation instructions.",
        name: "installation",
        type: "input",
    },
    {
        message: "Please provide the project usage.",
        name: "usage",
        type: "input",
    },
    {
        message: "Please select a license for your application.",
        name: "license",
        type: "list",
        choices: [`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
        `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`,
        `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`]
    },
    {
        message: "Please provide the contributing instructions.",
        name: "contributing",
        type: "input",
    },
    {
        message: "Please provide any test instructions.",
        name: "test",
        type: "input",
    },
    {
        message: "What is your github user name?",
        name: "username",
        type: "input",
    },
    {
        message: "What is your repo link?",
        name: "repo",
        type: "input",
    },
];

inquirer
    .prompt(questions)
    .then(function(data){
        const accountURL = `https://api.github.com/users/${data.username}`;

        axios.get(accountURL)
        .then(account => {
            const accountInfo = {
                email: account.data.email,
                profile: account.data.html_url,
                name: account.data.name
            };
            fs.writeFile("README.md", generateMarkdown(data, accountInfo), function(err) {
                if (err) {
                    throw err;
            };
            console.log("New README Success!");
          });
        });
});
