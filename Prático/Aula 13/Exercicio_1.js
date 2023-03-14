let io = require("../../io")

let vetPeople = []

class Pessoa {
    nome
    idade
}

for (i = 0 ; i < 2 ; i++){
    let pessoa = new Pessoa
    io.write("Escreva o nome de uma pessoa:")
    pessoa.nome = io.read()
    io.write("Escreva a idade da pessoa:")
    pessoa.idade = io.read()
    vetPeople[i] = pessoa
}

for (i = 0 ; i < vetPeople.length ; i++){
    if (vetPeople[i].idade > 18){
        io.write(vetPeople[i])
    }
}