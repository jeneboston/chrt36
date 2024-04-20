//Асинхронный код и синхронный
console.log('apple');

setTimeout(() => {
    console.log('orange');
},5000)
console.log('banana');

//JS - однопоточный язык программирования

function getSix() {
    setTimeout(() => {
        return 6
    },4000)
}
let x = getSix();
console.log(x);

function printClap() {
    console.log('bravo');
}

function clapHands() {
    setTimeout(printClap, 3000);
    setTimeout(printHands, 2000);
}
clapHands();
printClap();