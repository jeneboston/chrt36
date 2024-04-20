//функции в js
//Function Declaration
//Дерларирование функций( объявление функций)

function sum(a,b){
    return a + b
}

//Function Expression

let result = sum (50, 30)
console.log(result);

//expression next

const divide = function(a,b){
    return a / b
}
console.log(divide(10, 2))

//разница между функциями declaration и expression
//function declaration - вызов функции до объявления

print2("print2");
console.log(print2);

function print2(){
    console.log(print2);
    
}