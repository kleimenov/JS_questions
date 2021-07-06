
//What will the code below output?

// console.log(0.1 + 0.2)
// console.log(0.1 + 0.2 == 0.3)

function equalNumbers(num1, num2) {
    return Math.abs( num1 - num2) < Number.EPSILON;
}

console.log(equalNumbers(0.1 + 0.2, 0.3))