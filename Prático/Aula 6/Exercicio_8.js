let io = require("../../io")

let num

io.write("Escreva um número inteiro")
num = io.read()

for (count = 1 ; count <= num ; count++){
    if (num % count == 0){
        io.write(count)
    }
}