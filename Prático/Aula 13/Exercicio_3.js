let io = require("../../io")


class Pessoas {
    idade
    nome
    aumentaridade(){
        return this.idade++
    }
}

let vetPeople = []

for (i = 0; i < 2; i++) {
    let pessoa = new Pessoas
    io.write("Escreva o nome de uma pessoa:")
    pessoa.nome = io.read()
    io.write("Escreva a idade da pessoa:")
    pessoa.idade = io.read()
    pessoa.aumentaridade()
    vetPeople.push(pessoa)
}


for (i = 0; i < vetPeople.length; i++) {
    io.write(vetPeople[i])
}