let io = require("../../io")




console.log("Escreva um número:")

var preco1 = io.readFloat()

console.log("Escreva outra número:")

var preco2 = io.readFloat()

var res = (preco1 + preco2) / 2

console.log("O resultado é:" + res)
