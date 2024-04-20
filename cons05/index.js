const arr = ['audi', 'bmw', 'mercedes', 'volvo'];
const newArr = [...arr, 'porsche'];
newArr[3] = 'ford';
console.log(newArr);

const carArr =[
    {brand: 'VW', color:'red'},
    {brand: 'Mercedes', color:'blue'},
    {brand: 'Pegeot', color:'black'},
    {brand: 'VW', color:'red'}
]
const newCarArr =carArr.map((carArr) => {
    if (carArr.brand === 'VW') {
        return {...carArr, color: 'green'}
    }
    else {
        return carArr
    }
})
console.log(newCarArr);


const obj = {
    name: 'John',
    size:   'large',
    age: 30
}
const newObj = {
    ...obj,
    color: 'red'
}
console.log(newObj)
newObj.color = 'blue';
console.log(newObj)

const anyObj = {
    name: 'John',
    surname: 'Doe',
}
const anyObj2 = anyObj;
anyObj2.name = 'Alex';
console.log(anyObj)

anyObj3 = {
    age: 30,
    name: 'John',
}
anyObj4 = {
    ...anyObj3
}
anyObj4.name = 'Alex';
console.log(anyObj3);
console.log(anyObj4);

const users =[
    {id: 1,
    firstname: 'John',
    age: 30,
    active: true},
    {id: 2,
    firstname: 'Max',
    age: 21,
    active: false},
    {id: 3,
    firstname: 'Kate',
    age: 35,
    active: true},
    {id: 4,
    firstname: 'Iv',
    age: 25,
    active: false},
    {id: 5,
    firstname: 'Nattan',
    age: 33,
    active: true},
]
function compare(a, b) {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  }
const sortedUsers = [...users].sort(compare);
console.log(sortedUsers)

//2 variant

const sortedUsers2 = users.slice().sort((a,b)=>a.age - b.age)
console.log(sortedUsers)
const sortedUsers3 = users
.map((element) =>element)
.sort((a,b)=>a.age - b.age);

const sortedUsers4 = [...users].sort((a,b)=>a.age - b.age).map((element) =>element);
const usersCopy = [...users];
console.log(usersCopy);
console.log(usersCopy.sort((a,b)=>a.age - b.age));

const ageSum = users.reduce((acc,cur)=>acc+cur.age,0);
const ageSum1 = users.reduce((acc,{age})=>acc+age,0);
console.log(ageSum, ageSum1);


