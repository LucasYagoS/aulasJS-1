// Criando um array para armazenar os números sorteados
let numerosSorteados = [];

// Sorteando 1000 números aleatórios entre 1 e 20
for (let i = 0; i < 1000; i++) {
  let numero = Math.floor(Math.random() * 20) + 1;
  numerosSorteados.push(numero);
}

// Ordenando os números do mais sorteado ao menos sorteado
numerosSorteados.sort(function(a, b) {
  return numerosSorteados.filter((x) => x === b).length - numerosSorteados.filter((x) => x === a).length;
});

// Imprimindo os números sorteados em ordem
console.log(numerosSorteados);
