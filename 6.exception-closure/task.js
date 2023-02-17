function parseCount(number) {
    let num;
    num = parseFloat(number);
    if (isNaN(num) === true) {
        throw new Error("Невалидное значение");
    }

    return num;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (err) {
        return err;
    }
}

console.log(validateCount('888'));


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a > b + c || b > a + c || c > a + b) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
    }

    get perimeter() {
        this._perimeter = this.a + this.b + this.c;
        return this._perimeter.toFixed(2)
    }

    get area() {
        const p = (this.a + this.b + this.c) / 2;
        this._area = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;
        return this._area.toFixed(2)
    }


}

function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getArea: function () {
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter: function () {
                return "Ошибка! Треугольник не существует"
            }
        }
    }

}
console.log(new Triangle(5,5,5).area);
console.log(new Triangle(5,5,5).perimeter);