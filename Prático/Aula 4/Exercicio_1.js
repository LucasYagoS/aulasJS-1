let io = require("../../io")

let n
let counter = 1
let phrase

io.write("Digite um núemro inteiro:")
n = io.readInt()
io.write("Digite uma frase:")
phrase = io.read()


while (counter < n) {
    io.write(phrase)
    counter++
}