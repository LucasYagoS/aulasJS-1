let io = require("../../io")

let num
let i = 0
io.write("Escreva um número inteiro")
num = io.read()

for (count = 1 ; count <= num ; count++){
    if (num % count == 0){
        i++
    }
}
io.write(`O némero ${num} tem ${i} divisores.`)