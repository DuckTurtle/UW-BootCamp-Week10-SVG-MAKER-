const { Circle, Triangle, Square } = require('./shape.js')
// returns svg code for shape
const setShape = (shape, shapeColor) => {
  // calls the class inorder to get render to work.
  let sharp;
  switch (shape) {
    case "circle":
      sharp = new Circle(shapeColor);
      break;

    case "triangle":
      sharp = new Triangle(shapeColor);
      break;

    case "square":
      sharp = new Square(shapeColor);
      break;
  }
// grabs the proper render.
  if (shape === 'circle') {
    return (sharp.render());
  }

  else if (shape === 'triangle') {
    return (sharp.render());
  }
  else if (shape === 'square') {
    return (sharp.render());
  }
};

// generates the svg
function generateMarkdown({ shape, shapeColor, textColor, title }) {
  //skeltion for the read me file 
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${setShape(shape, shapeColor)}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${title}</text>
</svg>`
}

module.exports = { setShape, generateMarkdown };