const inputText = document.getElementById('inputText')
const inputBtn = document.getElementById('inputBtn')

inputBtn.addEventListener('click', () => {
    console.log(inputText.value);
    inputText.value = ''
})