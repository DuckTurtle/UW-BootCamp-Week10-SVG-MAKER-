//const shapeC =shapeColor;
class Shape {
    constructor(color = "blue") {
        this.color = color
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
class Triangle extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `<polygon points="150 5, 250 200, 50 200" fill="${this.color}" />`
    }
}
class Square extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `<rect x="50" y="20" width="200" height="175" fill="${this.color}" />`
    }
}
module.exports = { Circle, Triangle, Square };