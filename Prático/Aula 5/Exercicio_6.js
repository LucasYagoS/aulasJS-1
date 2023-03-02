let io = require("../../io")

var num1
var num2
var num3

console.log("Escreva um número:")

num1 = io.readInt()

console.log("Escreva outro número:")

num2 = io.readInt()
console.log("Escreva outro número:")
num3 = io.readInt()
if (num1 > num2 && num1 > num3) {
    io.write("O número maior é: " + num1)
} else if (num2 > num1 && num2 > num3) {
    io.write("O número maior é: " + num2)
} else{
    io.write("O número maior é: " + num3)
}