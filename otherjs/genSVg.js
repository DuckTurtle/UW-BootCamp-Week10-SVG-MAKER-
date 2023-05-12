const setShape = (shape, shapeColor) => {
  console.log(shape);
  if (shape === 'circle') {
    return `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`
  }
  else if (shape === 'triangle') {
    return `<polygon points="150 5, 250 200, 50 200" fill="${shapeColor}" />`
  }
  else {
    return `<rect x="50" y="20" width="200" height="175" fill="${shapeColor}" />`
  }
};


function generateMarkdown({ shape, shapeColor, textColor, title }) {
  //skeltion for the read me file 
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${setShape(shape, shapeColor)}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${title}</text>
</svg>`
}

module.exports = {setShape,generateMarkdown};