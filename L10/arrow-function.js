//arrow functions

//simple function
function sum (a, b) {
    return a + b
}
console.log(sum(10, 20));

//arrow function
const sum2 = (a, b) => {
    return a + b
}
//запись в одну строку

const sum3 = (a, b) => a + b;
console.log(sum3(10, 20))

//передача функции как параметра

function calculate (a,b,operation) {
    return operation(a,b)
}
function substract (a,b) {
    return a - b;
}
//вызов функции

calculate (9,3, substract);//9-3=6
calculate (9,3, (a,b) => a/b);//9/3=3

//____________

/* function universalGreeting(name) {
    return `Hello ${name}`;
}
const greeting = universalGreeting("John");
console.log(greeting);

function englishGreeting(name) {
    return `Hello ${name}`;
}
const greeting2 = englishGreeting("John");
console.log(greeting2);

function japaniseGreeting(name){
    return `Kinnichiwa, ${name }`;
    
}
const greeting3 = japaniseGreeting("John");
console.log(greeting3) */

//____________

function universalGreeting (name, greetingFunction){
    return greetingFunction(name);
}
function englishGreeting(name){
    return `Hello, ${name}`;
}
const res2 = universalGreeting("John", englishGreeting);
console.log(res2)

const res3 = universalGreeting("Haruki", (name => `Kinnichiwa, ${name}`));
console.log(res3)