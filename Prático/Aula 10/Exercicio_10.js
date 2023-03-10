// Declaração das variáveis
let hour, angle, hourWithRightAngle;

// Percorre todas as horas do dia
for (hour = 0; hour < 12; hour++) {
  // Calcula o ângulo formado pelos ponteiros das horas e dos minutos
  angle = Math.abs(0.5 * (60 * hour - 11 * new Date().getMinutes()));
  // Verifica se o ângulo é de 90 graus com uma margem de erro de 0.1 graus
  if (Math.abs(angle - 90) <= 0.1) {
    // Armazena a hora em que os ponteiros formam um ângulo reto
    hourWithRightAngle = hour;
    break; // interrompe o loop assim que encontrar o ângulo reto
  }
}

// Imprime a hora em que os ponteiros formam um ângulo reto, se houver
if (hourWithRightAngle !== undefined) {
  console.log(`Os ponteiros formam um ângulo de 90 graus às ${hourWithRightAngle} horas.`);
} else {
  console.log("Não há nenhuma hora em que os ponteiros formem um ângulo de 90 graus.");
}
