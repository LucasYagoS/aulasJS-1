let io = require("../../io")

let f
let c

console.log("Escreva a temperatura em Fahrenheit:")
f = io.readFloat()

c = ((f - 32) / 9) * 5

console.log(`${c} ºC`)