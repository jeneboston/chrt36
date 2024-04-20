const paragraphElement = document.getElementById("text");
const changeButtonElement = document.getElementById("btn-change");
const flowersElement = document.getElementById("flowers");
const changeFlowerButtonElement = document.getElementById("btn-change-flower");
const pandaImageElement = document.getElementById("panda");
const pandaButtonElement = document.getElementById("add-panda");
//Check all
//Добавляем слушатель событий (событие, колбек функция)
changeButtonElement.addEventListener("click", () => {
    //Код выполнится при нажатии на кнопку.
    paragraphElement.style.color = "lightcoral";
});

changeFlowerButtonElement.addEventListener("click", () => {
    //Код выполнится при нажатии на кнопку.
    flowersElement.textContent = "Ягодки";
});

pandaButtonElement.addEventListener("click", () => {
    //Код выполнится при нажатии на кнопку.
    pandaImageElement.src = "/L08/example2/panda.jpg";
    pandaImageElement.style.width = "300px";
});