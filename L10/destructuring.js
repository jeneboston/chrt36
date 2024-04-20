const person = {name: 'John',    age: 30}
console.log(person.age);
const age = person.age;
const name = person.name;
console.log(name, age);

//способ сделать то же самое быстрее:

const dog = {nickname: 'Rex',breed: 'Husky'}
const {nickname, breed, height=10, color='black'} = dog;
console.log(nickname, breed, height, color)

