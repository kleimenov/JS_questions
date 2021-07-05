let text = 'Anna'
let text_2 = 'Jonh'

const polindromizer = (variable) => {
    variable = variable.toLowerCase()
    let newVariable =  variable.split('').reverse().join('')
    newVariable === variable ? console.log(true) : console.log(false);
    // return variable.split('').reverse().join('')
}

polindromizer(text)
polindromizer(text_2)
