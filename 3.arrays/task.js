function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((elem, i) => elem === arr2[i]);
}
console.log(compareArrays([8, 9], [6]))// false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])) // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])) // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])) // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])) // true
;


function getUsersNamesInAgeRange(user, gender) {
        let result = user.filter(elem => elem.gender.includes(gender)).map(elem => elem.age).reduce((acc, i, idx, arr) => {
            acc += i;
            if (idx === arr.length - 1) {
                return acc / arr.length;
            }
            return acc;
        }, 0)

        return user === 0 ? 0 : result;
    }

const user = [
    {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
    {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
    {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
    {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
    {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
    {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
    {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
    {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
    {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
    {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
    {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
    {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
    {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
    {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
]

console.log(getUsersNamesInAgeRange(user, "мужской")); // 32
console.log(getUsersNamesInAgeRange(user, "женский")); // 27.4
console.log(getUsersNamesInAgeRange([], "женский")); // 0
console.log(getUsersNamesInAgeRange(user, "инопланетянин")); // 0
