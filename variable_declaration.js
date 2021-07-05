//There are three types of variable declaration: 
// var, let, const
//Const - variable derined with const cannot be rediclared, cannnot be reassigned, have block scope,
// let - variable defined with let cannot be redeclared, must be declared before use, have block scope,
let cat = "HHCD"
console.log(cat)

//let cat = "YYY"
//console.log(cat)

//Var - variable can be redeclared, support  hoisting, and doesn't have block scope 
//var gogg = "Gogo"

var gogo = "Gogo II";
console.log(gogo)
var gogo;

{
    var x = 2;
    console.log("inside block", x)
}

console.log("outside block", x)

{
    let y = 5;
    console.log("inside block", y)
}

console.log("outside block", y)