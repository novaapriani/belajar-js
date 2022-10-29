const output = document.querySelector('.output')
const btnClear = document.querySelector('[data-all-clear]')
const btnDelete = document.querySelector('[data-delete]')
const btnNumber = document.querySelectorAll(['data-number'])
const btnOperator = document.querySelectorAll('[data-operator]')

btnNumber.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText)
    })
})