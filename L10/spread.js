//...

//SPREAD оператор
//Примитивные и ссылочные типы

const fruits = ["apple", "banana", "cherry"];
const fruits2 = fruits;

fruits[0] = "banana";

console.log(fruits)
console.log(fruits2)

//примитивные типы
//при работе с примитивами - в переменной мы храним значение
let str1 = "hello";
let str2 = str1;
str1 = "world";
console.log(str1)
console.log(str2)

//копирование

const cars = ["BMW", "Mercedes", "Audi"];
// spread operator ...
const cars2 = [...cars];
//если мы мутируем второй массив, то первый не меняется

cars2[0] = "Tesla";
console.log(cars)
console.log(cars2)

//объединение массивов с помощью SPREAD ...

const cities1 = ["Kyiv", "Lviv", "Odesa"];
const cities2 = ["Kharkiv", "Dnipro"];

const joinedCities = [...cities1, ...cities2];

console.log(joinedCities)

//создать массив и добавить в него элемент

const vegitables = ["carrot", "cucumber"];
const newVegitables = [...vegitables, "onion"];
console.log(vegitables);
console.log(newVegitables);

//методы. splice()
//этот метод изменяет содержимое массива заменяя существующие элементы

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.splice(0,2); // [1, 2]

console.log(numbers); */

//добавление элементов
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.splice(2, 0, 'a','b') */// вставляем элементы а и Б начиная с индекса 2.
//0 показывает сколько элементов мы хотим вставить
/* console.log(numbers); */

//метод slice()
//возвращает новый массив, содержащий копию части исходного массива

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = myArray.slice(2);
console.log(newArray);
console.log(myArray);

//