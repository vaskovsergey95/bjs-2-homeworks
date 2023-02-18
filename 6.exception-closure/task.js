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

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a < b + c || b < a + c || c > a + b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
       let res = this.a + this.b + this.c;
        res = res.toFixed(3)
        return Number(res);
    }

    get area() {
        const p = (this.a + this.b + this.c) / 2;
        let res = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;
        res = res.toFixed(3)
        return Number(res);
    }
}

function getTriangle (a,b,c) {
    try {
        return new Triangle(a,b,c);
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

console.log(getTriangle(5, 5,5).getPerimeter())
console.log(getTriangle(5,0,5).getArea())