const inputText = document.getElementById('inputText')
const inputBtn = document.getElementById('inputBtn')
const todoField = document.getElementById('field')

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
    TaskList.push(item[0])
}

function render() {
    todoField.innerHTML = ''
    TaskList.forEach(function (item) {
        generateFieldTask(item)
    })
}

function generateFieldTask(obj) {
    const elFieldTask = document.createElement('div')
    elFieldTask.classList.add('todo-field__item')
    if (obj.isDone) {
        elFieldTask.classList.add('todo-field__item-done')
    }
    todoField.appendChild(elFieldTask)
    const taskCheckbox = document.createElement('input')
    taskCheckbox.type = "checkbox"
    taskCheckbox.classList.add('todo-field__item-input')
    if (obj.isDone) {
        taskCheckbox.checked = true
    }
    elFieldTask.appendChild(taskCheckbox)
    const taskText = document.createElement('p')
    taskText.classList.add('todo-field__item-text')
    taskText.innerText = obj.text
    elFieldTask.appendChild(taskText)
    const taskImg = document.createElement('img')
    taskImg.classList.add('todo-field__item-trash')
    taskImg.src = "/img/trash.svg"
    taskImg.alt = "Удалить"
    elFieldTask.appendChild(taskImg)

}

inputBtn.addEventListener('click', () => {
    if (inputText.value.trim()) {
        addItemInTaskList()
        inputText.value = ''
    }
    render()
})

document.addEventListener('DOMContentLoaded', function () {
    const taskCheckboxes = document.querySelectorAll('.todo-field .todo-field__item .todo-field__item-input');
    taskCheckboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            const isChecked = event.target.checked;
            const taskItems = document.querySelectorAll('.todo-field .todo-field__item');
            if (isChecked) {
                taskItems[index].classList.add('todo-field__item-done');
                TaskList[index].isDone = true
            } else {
                taskItems[index].classList.remove('todo-field__item-done');
                TaskList[index].isDone = false
            }
        })
    })
})

// document.addEventListener('DOMContentLoaded', function() {
//     const checkboxes = document.querySelectorAll('.task-list-container .task-checkbox'); // Обновляем селектор

//     checkboxes.forEach((checkbox, index) => {
//         checkbox.addEventListener('change', (event) => {
//             const isChecked = event.target.checked;
//             const labels = document.querySelectorAll('.task-list-container .task-label'); // Обновляем селектор
//             if (isChecked) {
//                 labels[index].classList.add('task-label-done');
//             } else {
//                 labels[index].classList.remove('task-label-done');
//             }
//         });
//     });
// });

// const taskTrashes = document.querySelectorAll('.todo-field__item .todo-field__item-trash');

render()