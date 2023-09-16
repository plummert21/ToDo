const inputEl = document.getElementById('inputText')
const btnEl = document.getElementById('inputBtn')
const fieldEl = document.getElementById('field')

const arr = ['one', 'two', 'asda']

let counter = 0

function render() {
    fieldEl.innerHTML = ''
    for (let item of arr) {
        addEL(item)
    }
}

function addEL(text) {
    const divEl = document.createElement('div')
    divEl.classList.add('done')
    divEl.innerText = text
    fieldEl.appendChild(divEl)
}


btnEl.addEventListener('click', () => {
    if (inputEl.value.trim()) {
        arr.push(inputEl.value)
        render()
        inputEl.value = ''
    } else {
        inputEl.value = ''
    }
})

render()