let io = require("../../io");


let valor
io.write("Digite o numero");
valor = io.readFloat();
function funPar(valor) {
  if (valor % 2 === 0) {
    return true;
  } else {
    return false;
  }
}



io.write(funPar(valor));