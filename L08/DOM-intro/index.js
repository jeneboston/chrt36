console.log("Hello JS") 

//как создавать переменные в JS?
//let - локальная переменная
//const - константа
let x = 10
const y = 20
let z = x + y
console.log(z)

/* const name = "Vasya"
console.log(name) */

//как создавать функции в JS?
function add(a, b) {
    return a + b
}
console.log(add(1, 2))

const boxElement = document.getElementById("box-1")
console.log(boxElement)
boxElement.style.backgroundColor = "green" //JS  поменял цвет квадрата
//изменим ширину квадрата:
boxElement.style.width = "300px"
//изменим текст внутри квадрата
boxElement.innerText = "New text"
//сделаем текст в центре квадрата:
boxElement.style.textAlign = "center"

const work = {
    age:12,
    location:USA
}
const newWork = work
console.log(newWork)