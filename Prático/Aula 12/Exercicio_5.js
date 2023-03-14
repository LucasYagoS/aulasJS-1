let io = require("../../io")

const vetor = [1000, 40, 340, 501, 500, 1093, 245, 21]

function map (vetor){
    let vet2 = []
    for(i = 0 ; i < vetor.length ; i++){
        vet2.push(vetor[i] * 2)
    }
    io.write("Vetor novo:")
    io.write(vet2.toString())
    io.write("Vetor original:")
    io.write(vetor.toString())
}

map(vetor)