let cars = [{
    brand: 'ford',
    model: 'f-150',
    color: ['gray', 'pink', 'yellow']
},
{
    brand: 'dodge',
    model: 'Ram',
    color: ['white', 'green', 'blue']
}, 
{
    brand: 'chevy',
    model: 'camaro',
    color: ['white', 'green', 'blue']
},
{
    model: 'mustang',
    color: ['white', 'green', 'blue']
}]

// for(let item in cars) {
//     console.log(item, cars[item].brand)
// }
// for(let item of cars) {
//     console.log(item)
// }

cars.map(item => console.log(item))
cars.forEach(item => console.log(item))

cars.forEach(item => {
    item.brand ? item.brand = item.brand : item.brand = 'ford sport';
})
cars.forEach(item => console.log(item))

