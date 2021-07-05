//First method 

const sum_first_way = (x) => {
    //1. check how many arguments do we have (if more that one we need add to each other)
    if(arguments.length == 2) {
       //1.2 add two arguments
        return arguments[0] + arguments[1];
    } else {
        //2. define function that takes second value and add first
        return (y) => { 
            return x + y;
        }
    }
}

console.log(sum_first_way(3)(1))

const sum_second_way = (x, y) => {
   if(y !== undefined) {
       return x + y;
   } else {
       return (y) => {
           return x + y;
       }
   }
}

console.log(sum_second_way(3)(1))