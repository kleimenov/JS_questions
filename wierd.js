var a = {}

b = {key: 'b'}
c = {key: 'c'}


console.log("a", a)
console.log("b", b)
console.log("c", c)

a[b] = 123
a[c] = 456


console.log("a[b]", a[b])
console.log("a[c]", a[c])

console.log("a", a)

var g = {}

g.b = 123
g.c = 456

console.log(g)