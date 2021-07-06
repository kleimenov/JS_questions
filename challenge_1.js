// (function(){
//     var a = b = 3;
// })();

// console.log('a defined?' + (typeof a !== 'undefined'))
// console.log('b defined?' + (typeof b !== 'undefined'))

/*
Since both a and b are defined within the enclosing scope of the function,
and sincec the line they are on begins with the var keyword, most of JS devs
would expect both be undefined

However, that is not a case. The issue here is that most devs incorrectly
understand the statement var a = b = 3 to be shorthand for:

var b = 3
var a = b

but in fact var a = b - 3 is actually shorthand for:

b = 3
var a = b;

*/

