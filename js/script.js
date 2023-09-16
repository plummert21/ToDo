const inputText = document.getElementById('inputText')
const inputBtn = document.getElementById('inputBtn')
const todoField = document.getElementById('field')

const TaskList = [
    {
        text: 'Разметка',
        isDone: true
    },
    {
        text: 'Стили',
        isDone: false
    },
    {
        text: 'Script',
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
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    elFieldTask.innerText = obj.text
    elFieldTask.appendChild(checkbox)
}

inputBtn.addEventListener('click', () => {
    if (inputText.value.trim()) {
        addItemInTaskList()
        inputText.value = ''
    }
    render()
})