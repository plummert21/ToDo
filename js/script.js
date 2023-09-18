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
    const item = [
        {
            text: inputText.value,
            isDone: false
        }
    ]
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
    // checkbox.addEventListener('change', () => {
    //     //     const isChecked = checkbox.checked;
    //     //     if (isChecked) {
    //     //         elFieldTask.classList.add('todo-field__item-done');
    //     //         TaskList[index].isDone = true
    //     //     } else {
    //     //         elFieldTask.classList.remove('todo-field__item-done');
    //     //         TaskList[index].isDone = false
    //     //     }
    // })
    // создание текстового поля
    const taskText = document.createElement('p');
    taskText.classList.add('todo-field__item-text');
    taskText.innerText = obj.text;
    // создание кнопки для удаления элемента Todo
    const taskImg = document.createElement('img');
    taskImg.classList.add('todo-field__item-trash');
    taskImg.src = "/img/trash.svg";
    taskImg.alt = "Удалить";
    // Добавление родителя для 3 элементов блока
    elFieldTask.appendChild(taskCheckbox);
    elFieldTask.appendChild(taskText);
    elFieldTask.appendChild(taskImg);
    // Добавление родителя для блока item (отображение на странице)
    todoField.appendChild(elFieldTask);
}

inputBtn.addEventListener('click', () => {
    if (inputText.value.trim()) {
        addItemInTaskList();
        inputText.value = '';
    }
    render();
})

// document.addEventListener('DOMContentLoaded', function () {
//     const taskCheckboxes = document.querySelectorAll('.todo-field .todo-field__item .todo-field__item-input');
//     taskCheckboxes.forEach((checkbox, index) => {
//         checkbox.addEventListener('change', () => {
//             const isChecked = event.target.checked;
//             const taskItems = document.querySelectorAll('.todo-field .todo-field__item');
//             if (isChecked) {
//                 taskItems[index].classList.add('todo-field__item-done');
//                 TaskList[index].isDone = true
//             } else {
//                 taskItems[index].classList.remove('todo-field__item-done');
//                 TaskList[index].isDone = false
//             }
//         })
//     })
// })

render();