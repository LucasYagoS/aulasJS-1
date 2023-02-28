let io = require("../../io")

var num1
var num2
var num3
var res
console.log("Escreva o número maior:")

num1 = io.readInt()

console.log("Escreva outro número:")

num2 = io.readInt()

console.log("Escreva outro número:")

num3 = io.readInt()



if (num1 > num2 + num3) {
    console.log("Eles não formam os lados de um triângulo")
} else  if (num2 > num1 + num3) {
    console.log("Eles não formam os lados de um triângulo")
} else if (num3 > num1 + num2){
    console.log("Eles não formam os lados de um triângulo")
} else {
    console.log("Eles formam os lados de um triângulo")
}