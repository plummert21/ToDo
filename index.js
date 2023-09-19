const inputText = document.getElementById('form_input__text');
const inputBtn = document.getElementById('form_input__btn');
const todoList = document.getElementById('todoList');
const btnChecked = document.getElementById('form_change__btn-checked');
const btnClear = document.getElementById('form_change__btn-clear');

inputBtn.addEventListener('click', inputBtnClick);
btnChecked.addEventListener('click', btnCheckedClick);
btnClear.addEventListener('click', btnClearClick);

taskList = [
    // {
    //     text: 'HTML',
    //     isDone: true
    // },
    // {
    //     text: 'CSS',
    //     isDone: false
    // },
    // {
    //     text: 'JS',
    //     isDone: false
    // }
]

function initTaskList() {
    if (localStorage.getItem('ToDo').length > 10) {
        taskList = JSON.parse(localStorage.getItem('ToDo'));
    }
}

function pushLocalStorage() {
    localStorage.setItem('ToDo', JSON.stringify(taskList));
}

function render() {
    pushLocalStorage();
    todoList.innerHTML = '';
    taskList.forEach(function (item, index) {
        createItem(item, index);
    })
}

function createItem(item, index) {
    // div для всего item'а
    const elItem = document.createElement('div');
    elItem.classList.add('todoList__item');
    elItem.setAttribute('data-number', index);
    // div для checkbox'а и текста
    const todoListItemInfo = document.createElement('div');
    todoListItemInfo.classList.add('todoList__item-info');
    elItem.appendChild(todoListItemInfo);
    //// input для checkbox'а
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('todoList__item-info-checkbox');
    todoListItemInfo.appendChild(checkbox);
    //// p для текста
    const elText = document.createElement('p');
    elText.classList.add('todoList__item-info-text');
    todoListItemInfo.appendChild(elText);
    // button для кнопки удаления item'а
    const btn = document.createElement('button');
    btn.classList.add('todoList__item-remove');
    elItem.appendChild(btn);
    //// добавление иконки на кнопку
    const elIcon = document.createElement('img');
    elIcon.src = '/img/trash.svg';
    elIcon.alt = 'Удалить';
    btn.appendChild(elIcon);
    // установка свойств
    elText.innerText = item.text;
    if (item.isDone) {
        checkbox.checked = true;
        elItem.classList.add('todoList__item-done');
    }
    // добавление (отображение) item'a в div'e todoList
    todoList.appendChild(elItem);
    // добавление листнеров (обработчиков событий)
    btn.addEventListener('click', btnClick);
    elText.addEventListener('click', itemStatusChange);
    checkbox.addEventListener('change', checkboxChange);

    //функции
    function itemStatusChange() {
        if (checkbox.checked) {
            checkbox.checked = false;
        } else {
            checkbox.checked = true;
        }
        checkboxChange();
    }

    function checkboxChange() {
        taskList[elItem.dataset.number].isDone = checkbox.checked;
        render();
    }

    function btnClick() {
        taskList.splice(elItem.dataset.number, 1);
        render();
    }
}

function addItemInTaskList() {
    const item = {
        text: inputText.value,
        isDone: false
    }
    taskList.push(item);
}

function inputBtnClick(event) {
    event.preventDefault();
    if (inputText.value.trim()) {
        addItemInTaskList();
        inputText.value = '';
    }
    render();
}

function btnCheckedClick(event) {
    event.preventDefault();
    taskList.forEach(function (item) {
        item.isDone = true;
    })
    render();
}

function btnClearClick(event) {
    event.preventDefault();
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].isDone) {
            taskList.splice(i, 1);
            i = -1;
        }
    }
    render();
}

initTaskList();

render();