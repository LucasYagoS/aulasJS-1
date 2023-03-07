let io = require("../../io")

let vetNum = []

for(i = 0 ; i < 10 ; i++){
    io.write("Escreva um numero")
    vetNum[i] = io.readInt()

}

for(i = 0 ; i < 10 ; i++){
    io.write(vetNum[i] + 1)
}