let array = [1,2,3,4,5]
let cars = {
    brand: "volvo",
    model: "xc90"
}

//modern solution
const is_array = (data) => {
    Array.isArray(data) ? console.log('data is an array') : console.log('data is not an array')
}

is_array(array)
is_array(cars)

