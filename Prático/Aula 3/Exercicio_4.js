let io = require("../../io")

let ano

io.write("Escrava um ano:")
ano = io.read()
ano = ano % 4
if (ano == 0) {
    io.write("Esse ano é bissexto.")
} else {
    io.write("Esse ano não é bissexto.")
}
