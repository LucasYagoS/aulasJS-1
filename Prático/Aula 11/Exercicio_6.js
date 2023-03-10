let io = require("../../io");

let nomes = [];
let notas = [];
let i = 0
let n
while (n != -1) {
    io.write("Digite o nome do aluno: ");
    n = io.read();
    if (n != -1) {
        nomes[i] = n
        io.write("Digite a nota do aluno: ");
        notas[i] = io.readInt();
        i++
    }
}

function ordena(vetor1, vetor2) {
    let vetorOrdenado = [];

    for (let i = 0; i < vetor1.length; i++) {
        vetorOrdenado.push({
            nome: vetor1[i],
            nota: vetor2[i]
        });
    }

    vetorOrdenado.sort(function (a, b) {
        if (a.nome < b.nome) {
            return -1;
        } else if (a.nome > b.nome) {
            return 1;
        } else {
            return 0;
        }
    });

    return vetorOrdenado;
}

let alunosOrdenados = ordena(nomes, notas);

let soma = 0;

for (let i = 0; i < alunosOrdenados.length; i++) {
    soma += alunosOrdenados[i].nota;
}

let media = soma / alunosOrdenados.length;

io.write("Os nomes dos alunos em ordem alfabética são: ");

for (let i = 0; i < alunosOrdenados.length; i++) {
    io.write(alunosOrdenados[i].nome + ": " + alunosOrdenados[i].nota);
}

io.write("A média das notas dos alunos é: " + media);