//Мы можем создавать элементы с нуля и прикреплять их к документу html

const newElement = document.createElement("p");
newElement.textContent = "Это новый элемент";
newElement.style.border = "2px solid red";
document.body.appendChild(newElement);

const targetElement = document.getElementById("target-element");
const newBtn = document.createElement("button");
newBtn.textContent = "Нажми меня";
newBtn.type = "button"
targetElement.appendChild(newBtn);

