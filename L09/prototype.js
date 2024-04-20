//Прототипное наследование
//Наследование - это копирование свойства родительского объекта в новый

const bicycle = {
    brand: "Turist",
    price: 3000,
    bell(){
        console.log("Beep-beep");    
    }
}
bicycle.bell();

//Теперь на основании существующего велосипеда создаем горный велосипед
//Указываем прототип с помощью свойства Прото.
//По два подчеркивания с каждой стороны

const mountainBike = {
    __proto__: bicycle,
    price: 450,
    gears: 7
}

console.log(mountainBike.price); //выводим цену
console.log(mountainBike.gears); //выводим кол-во передач
console.log(mountainBike.brand); //выводим бренд

//создайте объект транспортное средство vehicle с полями:
//speed - 40
//capacity - 4
//drive(){} - with frase "Lets go"

//Create on base Vehicle object jeep with capacity = 5
//Speed - 60 and numberOfDoors = 2

//Call method drive from jeep

const vehicle = {
    speed: 40,
    capacity: 4,
    drive(){
        console.log("Lets go");
    }
}

const jeep = {
    __proto__: vehicle,
    capacity: 5,
    numberOfDoors: 2
}
console.log(jeep.drive());