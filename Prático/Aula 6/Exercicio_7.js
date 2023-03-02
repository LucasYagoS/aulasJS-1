let io = require("../../io")

let high = 0
let height
let age
let media = 0

for (i = 0 ; i < 5 ; i++){
    io.write("Escreva a idade de alguém")
    age = io.readInt()
    if (age > high){
        high = age
    }
    io.write("Escreva o a altura de uma pessoa")
    height = io.readFloat()
    media += height
}

media = media / 5

io.write(`A idade maior é : ${high}
A média das alturas é : ${media}`)