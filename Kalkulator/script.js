const output = document.querySelector('[data-output]')
const buttons = document.querySelectorAll('[data-button]')

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        switch (event.target.innerText) {
            case 'AC':
                output.innerText = ''
                break
            case '=':
                output.innerText = eval(output.innerText)
                break
            default:
                output.innerText += event.target.innerText
                break
        }

        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.innerText)
    })
})




