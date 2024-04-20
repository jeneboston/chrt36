const names = ['Alex', 'John', 'Kate', 'Alex', 'John', 'Kate'];
const ages = [25, 30, 35, 25, 30, 35];

constnameAges = [];
for (let i =0; i<names.length; i++){
    namesAges [i] = `${names[i]} ${ages[i]} ages`;
}
console.log(namesAges);

const name = "Alex";
const age = 25;
const text = `My name is ${name} and I am ${age} years old`;

console.log(text)

const reversed = [];
for (let i=0; i<namesAges.length; i++){
    reversed.unshift(namesAges[i]);
}
console.log(reversed)