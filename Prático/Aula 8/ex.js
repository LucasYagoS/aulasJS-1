let io = require("../../io")

function potencia(x, z) {
  let pot = 1
  for (let i = 1; i <= z; i++) {
    pot = pot * x
  }
  return pot
}

io.write("Digite o valor de X: ")
x = io.readInt()
io.write("Digite o valor de Z: ")
z = io.readInt()
io.write("O valor de X elevado a Z é: " + potencia(x, z))