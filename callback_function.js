//callback function is a function that passed to another function as argument and executed when some part of function logic is implemented
let array_of_numbers = [1,1,2,3,5,8,13]

const add_to_array = (array, callback) => {
    array.push(21);
    callback();
}

add_to_array(array_of_numbers, ()=>{
    console.log(array_of_numbers)
})

