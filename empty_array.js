let letters = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log('Before', letters)

//method 1
// letters = []
// console.log('After method 1', letters)

//method 2
// letters.length = 0
// console.log('After method 2', letters)

//method 2
letters.splice(0, letters.length)
console.log('After method 3', letters)