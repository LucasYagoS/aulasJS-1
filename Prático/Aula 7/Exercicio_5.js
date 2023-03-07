// Faça um programa de computador para receber 10 nomes de alunos e suas repectivas notas e depois imprimir as notas e nomes daqueles que obtiveram notas maiores que 7

let io = require("../../io")

let vetName = []
let vetNum = []

for(i = 0 ; i < 10 ; i++){
    io.write("Escreva o nome de um aluno:")
    vetName[i] = io.read()
    io.write("Escreva a nota do respectivo aluno:")
    vetNum[i] = io.readFloat()
}

io.write("Os alunos que passaram foram:")
for(i = 0 ; i < 10 ; i++){
    if (vetNum[i] > 7){
        io.write(vetName[i] + " --- " + vetNum[i])
        
    }
}