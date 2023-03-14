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

vetPeople.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

io.write(vetPeople)