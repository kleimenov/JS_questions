for(let i = 1; i <= 20; i++) {
    // let fizz = i % 3 === 0;
    // let buzz = i % 5 ===0;
    // console.log( fizz ? (buzz ? 'FizzBuzz' : 'Fizz') : buzz ? 'Buzz': i) 
    
    console.log(i % 3 === 0 ? (i % 5 ===0 ? 'FizzBuzz' : 'Fizz') : i % 5 === 0 ? 'Buzz' : i)
}