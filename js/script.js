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

render()