//7 типов переменных
//примитивные типы
//str, num, bool, null, undefined, symbol, bigint

//преобразование в строку
const str = String(1999);
console.log(typeof str);

//преобразование в число

const num = Number("1999");
console.log(typeof num)
const num2 = Number("1234#$@");
console.log(num2)
console.log(typeof num2)

//boolean

const bool = Boolean(0); //false
const bool2 = Boolean(1); //true
const bool3 = Boolean(""); //false
const bool4 = Boolean(" "); //true
const bool5 = Boolean(-1); //true
const bool6 = Boolean(null); //false
const bool7 = Boolean(undefined); //false
const bool8 = Boolean(NaN); //false

console.log([1,2,3,]+[4,5,6]);

