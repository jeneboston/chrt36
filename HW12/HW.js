const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porsche", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

// 1
const newCars = cars.map((car) => {
    return { brand: car.brand, isDiesel: car.isDiesel };
});
console.log(newCars);

// 2
const nonDieselCars = cars.filter((car) => !car.isDiesel);
console.log(nonDieselCars);

// 3
const sum = cars
    .filter((car) => !car.isDiesel)
    .map((car) => car.price)
    .reduce((acc, price) => acc + price, 0);
console.log(sum);
//4
cars.forEach((car) => car.price *=1.2);
console.log(cars);
//5
const cars3 = cars.map((car) => {
    if (car.isDiesel) {
        return{brand: "Tesla", price: 25000, isDiesel:false};
}
    return car;
});
console.log(cars3);

//6
const cars4 = cars.map((car) => 
    car.isDiesel?{brand: "Tesla", price: 25000, isDiesel:false}:car
);
console.log(cars4);