//Explain implicit type coercion in JS
//Implicit type coercion in JS is automatic conversion of value from one data type to another.
//It takes place when the operands of an expression are of different data types

//String coercion
//String coercion takes palce while using the + operator. When a number
//is added to a string the number automatically convertes to the string type
let x = 3;
let y = "5";

console.log(typeof(x + y))
console.log(typeof(y + x))
console.log(typeof(y - 5))

//when we use - operator it automatically converts to a number

let z = 'Hello';
let p = "3"
let b = 1;
let n = -2

console.log(z - p)
console.log(p - b)
console.log(z - p + y)
console.log(b - p + y, typeof(b - p + y))
console.log(n + y)
