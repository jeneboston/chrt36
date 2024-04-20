/* Создайте стрелочную функцию, 
которая бы принимала массив и цифру, 
возвращала бы элемент массива под этим индексом. */

const getElementByIndex = (array, index) => array[index];
/* function getElementByIndex(array, index) {
    return array[index];
} Это то же самое*/ 
const res = getElementByIndex(["lime","orange","banana"], 2);
console.log(res);

//____________________________________________________________
/* Создайте функцию, которая бы принимала бы следующие параметры: 
- код погоды
- функция decode, которая дает расшифровку погоды по коду. 
  
Функция должна возвращать строку, описывающую погоду. 
### Таблица соответствия код-описание: 
 - SQ – шквал
 - PO – пыльный вихрь
 - FC - торнадо
 - BR – дымка (видимость от 1 до 9 км)
 - HZ – мгла (видимость менее 10 км)
 - FU – дым (видимость менее 10 км)
 - DS - пыльная буря (видимость менее 10 км)
 - SS - песчаная буря (видимость менее 10 км)

Подсказка: удобно использовать в одном из методов switch-case:
```
switch (expression) {
    case value1:
        <код>
    case value2:
        <код>
// …
    case valueN:
        <код>
    default:
        <код>
}*/
const getWeatherDescription = function(code, decode) {
    return decode(code);
}
const decode = function (code){
    switch(code.toUpperCase()){
        case "SQ": return "шквал";
        case "PO": return "пыльный вихрь";
        case "FC": return "торнадо";
        case "BR": return "дымка";
        case "HZ": return "мгла";
        case "FU": return "дым";
        case "DS": return "пыльная буря";
        case "SS": return "песчаная буря";
        default: return "нет такого кода";
    }
}

//decode - это функция которая принимает код в качестве аргумента
//и возвращает соответствующее ему описание погоды

const res1 = getWeatherDescription("BR", decode);
console.log(res1);