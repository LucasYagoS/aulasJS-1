// Faça um programa de computador para receber 10 números e depois imprimir os primos.

let io = require("../../io")

let vetNum
let vetPrim = []


for(i = 0 ; i < 10 ; i++){
    io.write("Escreva um numero")
    vetNum = io.readFloat()
    let div = 0
    for(count = 1 ; count <= vetNum ; count++){
        
        if(vetNum % count == 0){
            div++
        }
        
    }
    if(div == 2){
        vetPrim.push(vetNum)
    }
}

    io.write(vetPrim)
