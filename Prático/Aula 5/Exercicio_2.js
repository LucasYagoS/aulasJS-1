let io = require("../../io")

let salat
let raise
let res
let salraisd

console.log("Escreva o seu sálario atual")
salat = io.readFloat()

console.log("Escreva o valor do aumento em %")
raise = io.readFloat()

salraisd = salat * (raise / 100)
res = salraisd + salat

console.log(`O seu salário atual é de: ${res}`)
