//SCOPING
//Scoping defines a variable's visibility. In JS variables can be declared with
//global scope and local scope

//Global scope - variable defined outside of function
let global_variable = 'This is global variable, a can see it global'

const print_variable = (variable) => {
    console.log(variable)
}

print_variable(global_variable)

//Local scope - variable define inside offunction

const print_local_variable = () => {
    var local_variable = "This is local variable";
    console.log(local_variable)
}

print_local_variable()
//console.log(local_variable);


//HOSTING
//Hoisting is a default behaviour of JS where all variable and function declarations
//are moved on top

exemple_of_hoisting  = 5;
exemple_of_hoisting_2 = 'Hello cat';
console.log(exemple_of_hoisting)
console.log(exemple_of_hoisting_2)
var exemple_of_hoisting;
var exemple_of_hoisting_2;