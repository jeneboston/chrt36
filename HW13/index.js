const formElement = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

const tasks = [];

const addTask = (event) => {
    event.preventDefault();
    
    // Получаем значения из инпутов
    const title = event.target.title.value;
    const description = event.target.description.value;

    // Очищаем поля ввода
    event.target.title.value = '';
    event.target.description.value = '';

    // Добавляем новую задачу в массив
    tasks.push({ title, description, done: false });
    console.log(tasks);

    // Отображаем задачи в HTML
    renderTasks();
}

function renderTasks() {
    // Очищаем список перед отрисовкой
    while (todoList.hasChildNodes()) {
        todoList.firstChild.remove();
    }

    // Добавляем задачи в список
    tasks.forEach((task) => {
        const li = document.createElement('li');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = task.done;
        checkBox.onclick = () => {
            // Меняем статус задачи на противоположный
            task.done = !task.done;
        }

        // Добавляем текст задачи в элемент li
        li.textContent = `${task.title}: ${task.description}`;

        // Добавляем чекбокс и текст задачи в список
        li.appendChild(checkBox);
        todoList.appendChild(li);
    });
}

// Добавляем обработчик события для формы
formElement.addEventListener('submit', addTask);