const {setShape,generateMarkdown} = require('./otherjs/genSVg.js');
//test for circle to return a circle
describe('Shape', () => {
    describe('shape options', () => {
        it('should retrun circle svg code when given the variables', ()=> {
            const cir = '<circle cx="150" cy="100" r="80" fill="blue" />';
           // const shapeSVG = new Svg();
            expect(setShape('circle','blue')).toEqual(cir);
        })
    })
});
describe('Shape', () => {
    describe('shape options', () => {
       
        it('should retrun triangle svg code when given the variables', ()=> {
            const tri = '<polygon points="150 5, 250 200, 50 200" fill="blue" />';
            //const shapeSVG = new Svg();
            expect(setShape('triangle','blue')).toEqual(tri);
        })
    })
});
describe('Shape', () => {
    describe('shape options', () => {
        it('should retrun square svg code when given the variables', ()=> {
            const squ = '<rect x="50" y="20" width="200" height="175" fill="blue" />';
           // const shapeSVG = new Svg();
            expect(setShape('square','blue')).toEqual(squ);
        })
    })
});

describe('SVG', () => {
    describe('SVG GENERation', () => {
        it('should retrun an svg', ()=> {
            const skelly =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">jeb</text>
</svg>`;
          const answer = {
            shape: 'circle',
            shapeColor: 'blue',
            textColor: 'orange',
            title: 'jeb'
          }
          
            expect(generateMarkdown(answer)).toEqual(skelly);
        })
    })
});
