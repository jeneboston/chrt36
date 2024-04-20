//повторим спреад массив
const fruits = ["apple", "banana", "cherry"];
const newFruits = [...fruits, "orange"];
console.log(newFruits);

//повторим спреад объект
const fruit = {
    title:"apple",
    color:"red",
    weight: 200
}
console.log(fruit);

const specialOrange = {
    ...fruit, country: "Maroco"
}
console.log(specialOrange);

//скопируем Apple и заменим цвет
const specialApple = {
    ...fruit, color: "green"
}
console.log(specialApple)