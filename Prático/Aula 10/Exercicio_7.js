let io = require("../../io")

let vet = []
let string


function vetreverse (){
    io.write("Escreva algo: ")
    string = io.read()
    vet = string.split('')
    vet.reverse()
    return vet

}

io.write(vetreverse())