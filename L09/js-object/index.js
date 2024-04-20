const student = {
    age: 22,
    name: "Alex",
}

console.log(student.age); //we get age from the object
console.log(student.name); //we get name from the object

const product = {
    title: 'iphone',
    price: 2000,
    "model of phone": "XR",
}

//get parameter by key

console.log(product.price);
console.log(product["model of phone"]);

//add new parameter

product.color = "black";
product["type of adapter"] = "USB-C";
console.log(product);

let key = "age";
console.log(student[key]);
key = "name";
console.log(student[key]);

const client = {
    firstName: "Alex",
    wife: "Maria"
}
const key1 = "wife";
//формулировка преподавателя "Как достать по переменной из объекта":
console.log(client[key1]);
console.log([key1]);

//Making object from values

const title = "Titanic";
const capacity = 1500;

const titanic = {title, capacity};
console.log(titanic);

//5

const name1 = "Avrora";
const cap = 300;
//хочу создать объект из этих переменных с другим названием ключей
const avrora = {titl:name1, capacity:cap}
console.log(avrora)

//6 пример

const dog = {
    name: "Rex",
    bark() {
        console.log("woof!");
    }
};
//fn:
dog.bark();

