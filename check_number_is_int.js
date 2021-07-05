const num = 3;
const num_decimal = 3.25;


const what_a_number =(num)=> {
    num %1 === 0 ? console.log("this number is integer:", num) : console.log("this is decimal number:", num);
}

what_a_number(num_decimal)
