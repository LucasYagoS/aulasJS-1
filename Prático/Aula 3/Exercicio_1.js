let io = require("../../io")

var num1
var num2

console.log("Escreva um número:")

num1 = io.read()

console.log("Escreva outro número:")

num2 = io.read()

if (num1 > num2) {
    io.write("O número maior é: " + num1)
} else {
    io.write("O número maior é: " + num2)
}