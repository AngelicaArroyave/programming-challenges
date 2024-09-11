class Figure {
    area() { }
    showArea() { }
}

class Triangle extends Figure {
    constructor(base, height) {
        super()
        this.base = base
        this.height = height
    }
    
    area() {
        return (this.base * this.height) / 2
    }

    showArea() {
        console.log(`El área del triángulo es ${this.area()}`);
    }
}

class Square extends Figure {
    constructor(side) {
        super()
        this.side = side
    }

    area() {
        return this.side * this.side
    }

    showArea() {
        console.log(`El área del cuadrado es ${this.area()}`);
    }
}

class Rectangle extends Figure {
    constructor(base, height) {
        super()
        this.base = base
        this.height = height
    }

    area() {
        return this.base * this.height
    }

    showArea() {
        console.log(`El área del rectángulo es ${this.area()}`);
    }
}

function main() {
    const triangle = new Triangle(2, 4)
    triangle.showArea()

    const square = new Square(3)
    square.showArea()

    const rectangle = new Rectangle(2, 3)
    rectangle.showArea()
}

main()