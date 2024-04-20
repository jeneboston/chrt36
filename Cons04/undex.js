//ex 1

const boy = {
    name: "Alex",
    age: 25 
}
//key, value - name: Alex, age: 25
//получили значение по ключу

console.log(boy.name);
console.log(boy.job);

//как записывать новое значение по ключу
boy.name = "Vlad";
console.log(boy.name);

// if key not exsist?

boy.job = "developer";

console.log(boy);

//ex 2 Свойства из нескольких слов

const user = {name: "Misha", age:33, "cat name": "Barsik"};
console.log(user["cat name"]);
//create new key with two words
user["land of birth"] = "Kyiv";

//ex 3
console.log(user);
delete user.age; //it will delete age
console.log(user)

//ex 4

const cat = {name: "Markis", color: "gray"};
const key1 = "color";
//Как по сохраненному ключу получить значение из объекта
console.log(cat.key1); //undefined
console.log(cat[key1]); //grey
console.log(cat.color); //grey

//ex5

//У нас есть переменные, и мы хотим из них создать объект

const brand = "Nikon";
const price = 200;
//creating obj

const phone = {brand, price}

console.log(phone)

//ex 6
//создать объект на основании переменных,
//но сохранить под другими ключами

const bestPrice28 = 400;
const input = "Sony";
const tv = {brand: input, price: bestPrice28};
console.log(tv);

//ex 7

const bear = {
    name: "Paddington",
    age: 4,
    bark(){
        console.log("ruff ruff");
    },
    fetchToy(){
        console.log("toy");
    }
}
bear.bark();
//===============================================
//

let arr = [1, 2, 3, "four", "five"];
console.log(arr);

//метод push() меняет исходный масив, добавляя элементы в конец
// и возвращает новую длину массива

let res = arr.push(6,7,8);
console.log(arr);
console.log(res);

//метод pop() меняет исходный масив, удаляя последний элемент

res = arr.pop();
//последний элемент удалили
console.log(arr);

//метод shift() меняет исходный масив, удаляя первый элемент

res = arr.shift();
console.log(arr);

//метод unshift() меняет исходный масив, добавляя элементы в начало

res = arr.unshift(0, 1);
console.log(arr);

//метод concat() объединяет два масива

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];


let arr3 = arr1.concat(arr2);
console.log(arr3);

fruits = ["apple", "banana", "orange"];
newfruits = [...fruits, "kiwi", "mango", "pineapple"];
console.log(newfruits);
console.log(fruits);

