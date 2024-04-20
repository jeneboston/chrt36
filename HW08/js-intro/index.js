// Primitive types of data?

// String - primitive

let str1 = "Hello";
let str2 = 'World';

let str3 = '13'; // its string at all

let str4 = str1 + ' ' + str2;
console.log(str4)
console.log(str1.toLocaleUpperCase())

//2 number

let num1 = 10;
let num2 = 20.5;

//3 bigInt

let num3 = 1234567890123456789012345678901234567890n;

//4 boolean

let isDrunk = true;
if (isDrunk){
    console.log("you are drunk")
}
const result = isDrunk ? "you are drunk" : "you are not drunk";

//5 undefined

let undef;
undef = 10;
console.log(undef)

//6 null

let nul = null;

//7 symbol

let sym = Symbol();

//8 object

let obj = {
    name: "Vasya",
    age: 20
}

console.log(obj.name)

//9 array

let arr = [1, 2, 3, 4, 5];

console.log(arr[0])

//10 function

let func = function() {
    console.log("Hello World")
}

func()

//Преобразование типов

// неявное преобразование

let str7 = "" + 10; // "10"
console.log(typeof str7)

// явное преобразование

let str8 = String(10);
let num4 = 10;
let str9 = String(num4);
console.log(typeof str8, typeof str9)

const res = 9 + 12 + "5"; //"215"
console.log(typeof res)
const res2 = "5" + 9 + 12; //"5912"
console.log(typeof res2)

// преобразование в число
const num5 = +"6";
console.log(typeof num5)
const sum = "9" + + "10";
console.log(typeof sum)

//явное преобразование в число

const num6 = Number("10");

console.log(num6)
console.log(typeof num6)

//явное преобразование в boolean

const bool = Boolean(0); //false
const bool2 = Boolean(1); //true

console.log(bool, bool2)


// Преобразование строки в булевое значение

const bool3 = Boolean("Hello"); //true
const bool4 = Boolean(""); //false

console.log(bool3, bool4)

//Равенство строгое и нестрогое
// == - не строгое
// === - строгое

console.log(10 == "10") //true 10 преобразованное в строку и он проверяется на равенство
console.log(10 === "10") //false
console.log(true =="") //false
console.log(true=="1") //true

let n16 = 13 % 2;
console.log(n16)
let n17 = 13**2;
console.log(n17)

Math.sqrt()