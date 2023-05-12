const inquirer = require('inquirer');
//calls the gen markdown js file
const {generateMarkdown} = require('./otherjs/genSVg.js');
// calls the file system.
const fs = require('fs');

// prompts user when called to get info
const questions = async () => {
    return  inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter 1-3 charaters for your logo:',
            validate: (input) => {
                if (input.length > 3 || input.length < 1) {
                   console.log('.   THATS NOT ALLOWED! TRY AGAIN!');
                   return false;
                }
                else {
                    return true;
                }
            }
            //await checkLength(input)
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color or a 3/6 charater hex code for the letters:',
           // validate: await checkColor()
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select the Shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color or a 3/6 charater hex code for the shape:',
            //validate: await checkColor()
        }

    ])
};
// TODO: runs on oppen
function init() {
    questions()
        // sends the code to the other js file then creates svg.
        .then((answers) => {
            
            const generateSVG =  generateMarkdown(answers);
            console.log(generateSVG);
            fs.writeFile(`logo.svg`, generateSVG, (err) =>
                err ? console.log(err) : console.log('Successfully created LOGO'))
        })

}

// Function call to initialize app
init();
