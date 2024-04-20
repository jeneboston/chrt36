function addTask() {
    const taskText = document.getElementById('taskInput').value;
if (taskText.trim() ===""){
    alert("Пожалуйста, введите текст задачи");
    return;
    }

//return  после вызова Алерт(), функция завершается с помощью оператора return.
//это предотвращает добавление пустой задачи в список задач
//и завершает выполнение функции addTask()
//Создаем новый элемент списка
const taskItem = document.createElement("li");
taskItem.innerHTML = `${taskText} <button onClick ="removeTask(this)">Удалить</button>`;
//Создание кнопки удалить и изменить внутри элемента списка
//Событие onClick устанавливает обработчик события
//далее будет вызываться функция на удаление элемента (списка)
//передавая текущий элемент кнопки в качестве аргумента, тогда кнопка будет нажата

//добавляем єлемент в список задач

document.getElementById("taskList").appendChild(taskItem);
document.getElementById("taskInput").value = "";
}
function removeTask(button){
    //удаляем родительский элемент (li) при клике на кнопку удалить
    const taskItem = button.parentElement;
    //эта строчка кода получает родительский элемент
    //(элемент - контейнер) кнопки УДАЛИТЬ
    //в данном случае родительским элементом кнопки
    //является элемент списка задач (элемент - li)
    //так как кнопка находится внутри элемента списка
    taskItem.remove();
}
