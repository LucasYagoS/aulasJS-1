let io = require("../../io")


var anosfumado

var cigarrospordia

var precodomaco

var res


console.log("Escreva o tempo que fuma em anos:")

anosfumado = io.read()

console.log("Escreva o números de cigarros que fuma por dia:")

cigarrospordia = io.read()

console.log("Escreva o valor do seu maço de cigarro:")

precodomaco = io.read()

var diasfumado = anosfumado* 365

var cigarrosporano = cigarrospordia * diasfumado

var macosporano = cigarrosporano / 20

res = macosporano * precodomaco

console.log("Você gastou:" + res)
