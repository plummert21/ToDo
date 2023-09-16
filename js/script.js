const inputText = document.getElementById('inputText')
const inputBtn = document.getElementById('inputBtn')

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

inputBtn.addEventListener('click', () => {
    if (inputText.value.trim()) {
        const item = [
            {
                text: inputText.value,
                isDone: false
            }
        ]
        TaskList.push(item[0])
        inputText.value = ''
    }
})