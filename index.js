import inquirer from 'inquirer';
import fs from 'fs/promises';
import Circle from './shapes/Circle.js';
import Square from './shapes/Square.js';
import Triangle from './shapes/Triangle.js';


const questions = [
    {
        name: 'text',
        message: 'Enter up to three characters for your logo text:',
        validate: input => input.length <= 3 || 'Text should be up to 3 characters'
    },
    {
        name: 'textColor',
        message: 'Enter a color keyword (or a hexadecimal number) for the text color:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        name: 'shapeColor',
        message: 'Enter a color keyword (or a hexadecimal number) for the shape color:'
    }
];

inquirer.prompt(questions)
    .then(answers => {
        let shape;
        switch (answers.shape) {
            case 'Circle':
                shape = new Circle(answers.shapeColor);
                break;
            case 'Square':
                shape = new Square(answers.shapeColor);
                break;
            case 'Triangle':
                shape = new Triangle(answers.shapeColor);
                break;
        }

        generateSVG(answers.text, answers.textColor, shape);
    });

    function generateSVG(text, textColor, shape) {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                        ${shape.getSVG()}
                        <text x="150" y="100" font-size="30" text-anchor="middle" fill="${textColor}">
                            ${text}
                        </text>
                    </svg>`;
    
        fs.writeFile('logo.svg', svg)
          .then(() => console.log('Generated logo.svg'))
          .catch(err => console.error('Error generating SVG:', err));
    }

