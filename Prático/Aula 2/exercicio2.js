let io = require("../../io")


var i
var res
var x

console.log("Escreva um número:")

i = io.read()

console.log("Escreva outra número:")

x = io.read()

res = i * x

console.log("O resultado é:" + res)
