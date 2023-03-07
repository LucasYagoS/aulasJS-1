// Faça um programa de computador que recebe do usuário 10 números e depois imprime os pares e depois os ímpares

let io = require("../../io")

let vetNum = []

for(i = 0 ; i < 10 ; i++){
    io.write("Escreva um numero")
    vetNum[i] = io.readFloat()
}
io.write("Os números pares são:")
for(i= 0 ; i < 10 ; i++){
    
    if (vetNum[i] % 2 === 0){
        io.write(vetNum[i])
    }
}

io.write("Os números impares são:")
for(i= 0 ; i < 10 ; i++){
    
    if (vetNum[i] % 2 !== 0){
        io.write(vetNum[i])
    }
}