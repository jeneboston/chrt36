class Animals {
    constructor(age, name, color) {
        this.age = age;
        this.name = name;
        this.color = color;
    }
    info(){
        console.log(`Меня зовут ${this.name}, мне ${this.age} лет и я ${this.color}`);
    }
}
const panda = new Animals(14, "Po", "black");
panda.info();

//наследование
//Создадим производный класс птица
//добавим поле полета heightOfFlight и ration 

class Bird extends Animals {
    constructor(age, name, color, heightOfFlight, ration) {
        super(age, name, color);
        this.heightOfFlight = heightOfFlight;
        this.ration = ration;
    }
}
const colibri = new Bird(10, "Colibri", "white", 100, "flowers");

console.log(colibri)

class Alcohol{
    constructor(title, strenght, colume){
        this.title = title;
        this.strenght = strenght;
        this.volume = colume;
    }
    info(){
        console.log(`Any day without alcohol is like ${this.title}, ${this.strenght} and ${this.volume}`);
    }
}

class Brendy extends Alcohol{
    constructor(title, strenght, colume, taste){
        super(title, strenght, colume);
        this.taste = taste;
    }
    info(){
        console.log(`Any day without ${this.title} is like ${this.taste}, ${this.strenght} and ${this.volume}`);
    }
}
const brendy = new Brendy("Vodka", "10", "5", "sour");
brendy.info()
console.log(brendy)

class Liquer extends Alcohol{
    constructor(title, strenght, colume, taste){
        super(title, strenght, colume);
        this.taste = taste;
    }
    info(){
        console.log(`Any day without ${this.title} is like ${this.taste}, ${this.strenght} and ${this.volume}`);
    }
}
const liquer = new Liquer("Wine", "10", "5", "sour");
liquer.info()
console.log(liquer)