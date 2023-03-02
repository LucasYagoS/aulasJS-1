let io = require("../../io")

var num = 0
var i
var count
console.log("Escreva um número inteiro:")
i = io.readFloat()
for (count = 0; count < i; count++){
    num++
    if ((num % 2) === 0){
        console.log(`${num} - Par`)
    } else{
        console.log(`${num} - Impar`)
    }
}