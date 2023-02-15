class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
        return this.state;
    }

    set state(num) {
        this.states = num;
        if (this.state < 0) {
            this.states = 0;
        } else if (this.state > 100) {
            this.states = 100;
        } else {
            this.states = this.state;
        }

    }

    get state() {
        return this.states;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine"
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;


    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


const arkadii = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

console.log(arkadii.author); //"Аркадий и Борис Стругацкие"
arkadii.state = 10;
console.log(arkadii.state); //10
arkadii.fix();
console.log(arkadii.state); //15


class Library extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.name = name;
        this.books = [];

    }

    addBook(book) {
        if (this.state > 30) {
            return this.books.push(book)
        }
    }

    findBookBy(type, value) {
        for (let elem in this.books) {
            if (this.books[elem][type] === value) {
                return this.books[elem];
            }

        }
        return null;
    }

    giveBookByName(bookName) {
        for (let elem in this.books) {
            if (this.books[elem].name === bookName) {
                return this.books.splice(elem, 1)[0];

            }
        }
        return null;
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);
library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


class Student {
    constructor(name) {
        this.name = name;
        this.grage = [];
    }

    addMark(num, marks) {
        let subjects = [];
        if (num >= 2 && num <= 5) {
            subjects.push(marks, num);
            return this.grage.push(subjects);
        }
    }

    getAverageBySubject(arg) {
        let result;
        result = this.grage.filter(elem => elem[0].includes(arg)).map(elem => elem[1]).reduce((acc, i, idx, arr) => {
            acc += i;
            if (idx === arr.length - 1) {
                return acc / arr.length;
            }
            return acc;
        }, 0)
        return result;
    }

    getAverage() {
        let res;
        res = this.grage.map(elem => elem[1]).reduce((acc, i, idx, arr) => {
            acc += i;
            if (idx === arr.length - 1) {
                return acc / arr.length;
            }
            return acc;
        }, 0)
        return res;
    }
}

const student = new Student("Олег Никифоров");


student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
console.log(student.getAverage()); // Средний балл по всем предметам 4.75
console.log(student.grage)