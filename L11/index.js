const brothers = [
    {race: "hobbit", height: 110, age: 45, name: "Frodo Baggins"},
    {race: "human", height: 185, age: 46, name: "Aragorn"},
    {race: "elf", height: 189, age: 110, name: "Legolas"},
    {race: "dwarf", height: 140, age: 150, name: "Gimly"},
    {race: "human", height: 195, age: 200, name: "Gandalf"},
];
//Метод Мар - возвращает новый массив
//не изменяя старый массив

//Пример 1
const names = brothers.map((element) => element.name);
console.log(names);

//Пример 2
const ages = brothers.map((element) => element.age);
console.log(ages)

//Пример 3
const racesNames = brothers.map((brother) => brother.race + " " + brother.name)
console.log(racesNames)

//Пример 4
//высокий - выше или равно 170
//низкий - ниже 170
//массив из слов [маленький, высокий, высокий, маленький, высокий]
const sizes = brothers.map((brother)=>{
    if (brother.height >= 170){
        return "высокий";
    }
    return "маленький";
});
console.log(sizes)

const sizesVer2 = brothers.map((brother) => 
brother.height >= 170 ? "высокий" : "маленький");
console.log(sizesVer2)

//метод dorEach - для изменения исходного массива

//Пример 1
//Состарим всех героев на один год

brothers.forEach((brother)=>brother.age +=1);
console.log(brothers)

//Пример 2
//переведем все имена в верхний регистр

brothers.forEach((brother)=>brother.name = brother.name.toUpperCase());
console.log(brothers)

//Метод reduce
//с помощью цикла for
let sum = 0;
for (let i =0;i<ages.length;i++){
    sum += ages[i];
}
console.log(sum)

//с помощью метода reduce
const sum2 = ages.reduce((acc, curent)=>acc+curent, 0);
console.log(sum2);
//iteration -- acc -- curent
// 1        -- 0    -- 45
// 2        -- 45   -- 46
// 3        -- 91   -- 110
// 4        -- 201  -- 150
// 5        -- 351  -- 200

//Аккумулятор - значение
//которое накапливает результат применения функции
//текущий элемент масива (currentValue)
//текущий индекс (currentIndex)
//текущий масив (array)  
//ФУНКЦИЯ callback должна возвращать новое значение аккумулятора
//после обработки текущего элемента

//общая высота наших героев
const totalHeight = brothers.reduce((acc,brother)=> acc+ brother.height,0);
console.log(totalHeight);

//комбинация методов map и reduce
const totalHeight2 = brothers
.map((brother)=> brother.height)// получили массив ростов
.reduce((acc, height) =>acc+height,0)
console.log(totalHeight2);

//объединить имена через пробел
const nameStr = brothers
.map((brother)=> brother.name) // массив имен
.reduce((acc,name)=> acc+name + " ", " ")
console.log(nameStr);

//.trim - удаляет пробелы

//метод split - разделяет строку на массив
const str = "Gandalf, Legolas, Gimly, Aragorn, Boromir";
const namesArr = str.split(", "); //метод сплит 
console.log(namesArr); // [ 'Gandalf', 'Legolas', 'Gimly', 'Aragorn', 'Boromir' ]

//метод join - объединяет массив в строку
const newString = namesArr.join("!");
console.log(newString); //Gandalf!Legolas!Gimly!Aragorn!Boromir

//Метод find
//находит первый элемент в массиве (Только первый!)

const person = brothers.find((brother) => brother.race === "human");
console.log(person);// { race: 'human', height: 185, age: 47, name: 'ARAGORN' }

const person2 = brothers.find((brother) => brother.name === "ARAGORN");
console.log(person2);// { race: 'human', height: 185, age: 47, name: 'ARAGORN' }

//Метод filter
//фильтрует массив по условию
//возвращает новый массив
//не изменяет исходный

const humans = brothers.filter((brother) => brother.race === "human");
console.log(humans);

const oldBrothers = brothers.filter((brother) => brother.age > 100);
console.log(oldBrothers);

//выбрать всех старых, но не human

const oldNonHumans = brothers
.filter((brothers) => brothers.age >= 100 && brothers.race !== "human")

console.log(oldNonHumans)