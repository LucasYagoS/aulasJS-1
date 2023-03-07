// Faça um programa de computador para receber preços de 10 produtos e depois imprimir os preços que estão acima da média.


let io = require("../../io")

let vetNum = []
let soma = 0
let media

for(i = 0 ; i < 10 ; i++){
    io.write("Escreva o preço de um produto:")
    vetNum[i] = io.readFloat()
    soma += vetNum[i]
}

media = soma/10
io.write("A média dos preços é: " + media + " E a soma foi: " + soma)
for(i = 0 ; i < 10 ; i++){
    if (vetNum[i] > media){
        io.write(vetNum[i])
    }
}