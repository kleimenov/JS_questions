
// Question #1: What are the data types present in JS:

//There two types of data in JS: PRIMITIVE and NON-PRIMITIVE
/*
- Primitive data types can store only a single value;
- Non-primitive data types can store complex and multiple values
*/

//PRIMITIVE TYPES
//String - it represents a series of characters and is written with quotes.
let str_1 = "HHCD";
let str_2 = "Hello dear ";

console.log("This is example of primitive string data type:", str_2 + "" + str_1)
console.log("Lets check type of data:", typeof(str_1), typeof(str_2))

//Number - it represents a number and can be written with or without decimals
let number_x = 5;
let number_y = 8.6;

console.log("This is example of primitive numbers data type:", number_x, "and", number_y)

//BigInt - this data type is used to store numbers which are above the limitation of Number data type. 
//It can store large integers and is represented by adding "n" to an integer literal.

let bigInt = 875395837498737397959999997348n;
console.log("This is big integer data type:", typeof(bigInt), bigInt)

//Boolean - it represents a logical entity and can have just two values: true or false
let a = 5;
let b = 1;
let c = a;

a == b ? console.log(true) : console.log(false);
a == c ? console.log(true) : console.log(false);

//Undefined - when a variable is declared but not assigned, it hav the value of undefined
let variableWithOutValue;
console.log("This variable is undefined: ", variableWithOutValue)

//Null - it represents a non-existent or invalide value
let zero = null;

console.log("This is null value:", zero)

//Symbol - it is a new data type introduced in the ES6 version of JS.
//It is used to store an anonymous and unique value.

let test_symbol = Symbol("Canada")
let test_symbol_2 = Symbol(86)

console.log(test_symbol, test_symbol_2)

//print out all primitive data types with typeof() function
console.log(typeof(str_1))
console.log(typeof(number_x))
console.log(typeof(bigInt))
console.log(typeof(variableWithOutValue))
console.log(typeof(a == b))
console.log(typeof(zero))
console.log(typeof(test_symbol_2))

//NON-PRIMITIVE data types
//Object - used to store collection of data

//there are two types of collections of data in JS collection of data in kay-value pairs and collection of data as an ordered list
//Collection of data in key-value pairs

let Cars = {
    brand_name: "Ford",
    model: "F-150",
    color: "Green",
    engine: {type_of_engine: "gas", volume: "V8"},
    hp: 413,
    price: 50000
}

console.log("This is a collection of data in key-value pairs: ", Cars)
console.log("Show just one key = color:", Cars.color)
Cars.price = 45000
console.log("Updated price value:", Cars)
console.log("Change price value", Cars.price)

//Collection of data as ordered list

let trucs = ["Ford", "Ram", "Chevy", "Toyota"]

console.log("This is an example of collection of data as an ordered list: ", trucs)