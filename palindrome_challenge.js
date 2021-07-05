let text = 'anna'

const polindrpolindromizeromizeer = (variable) => {
    variable = variable.toLowerCase()
    return variable.split('').reverse().join('')
}

let newText =  polindromizer(text)

console.log(newText)