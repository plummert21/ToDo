const inputText = document.getElementById('inputText');
const inputBtn = document.getElementById('inputBtn');
const todoField = document.getElementById('field');

const TaskList = [
    {
        text: 'HTML',
        isDone: true
    },
    {
        text: 'CSS',
        isDone: false
    },
    {
        text: 'JS',
        isDone: false
    }
]

function addItemInTaskList() {
    const item = {
        text: inputText.value,
        isDone: false
    }
    TaskList.push(item[0]);
}

function render() {
    todoField.innerHTML = '';
    TaskList.forEach(function (item, index) {
        generateFieldTask(item, index);
    })
}

function generateFieldTask(obj, index) {
    // создание 1 элемента ToDo
    const elFieldTask = document.createElement('div');
    elFieldTask.classList.add('todo-field__item');
    if (obj.isDone) {
        elFieldTask.classList.add('todo-field__item-done')
    }
    // создание checkbox'а
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = "checkbox";
    taskCheckbox.classList.add('todo-field__item-input');
    taskCheckbox.checked = obj.isDone;;
    taskCheckbox.setAttribute('data-number', index);
    // создание текстового поля
    const taskText = document.createElement('p');
    taskText.classList.add('todo-field__item-text');
    taskText.innerText = obj.text;
    taskText.setAttribute('data-number', index);
    // создание кнопки для удаления элемента Todo
    const taskImg = document.createElement('img');
    taskImg.classList.add('todo-field__item-trash');
    taskImg.src = "/img/trash.svg";
    taskImg.alt = "Удалить";
    taskImg.setAttribute('data-number', index);
    // Добавление родителя для 3 элементов блока
    elFieldTask.appendChild(taskCheckbox);
    elFieldTask.appendChild(taskText);
    elFieldTask.appendChild(taskImg);
    // Добавление родителя для блока item (отображение на странице)
    todoField.appendChild(elFieldTask);
    // СОБЫТИЯ ПО НАЖАТИЯМ
    //// выполнение записи (нажатие checkbox)
    taskCheckbox.addEventListener(('change'), () => {
        TaskList[taskCheckbox.dataset.number].isDone = taskCheckbox.checked;
        render();
    })
    //// удаление записи (нажатие img trash)
    taskImg.addEventListener(('click'), () => {
        TaskList.splice(taskImg.dataset.number, 1);
        render();
    })
}

inputBtn.addEventListener('click', () => {
    if (inputText.value.trim()) {
        addItemInTaskList();
        inputText.value = '';
    }
    render();
})

render();