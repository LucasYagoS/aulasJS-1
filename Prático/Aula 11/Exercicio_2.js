let io = require("../../io")

let names = []
let aux

for (i = 0; i < 6; i++) {
    io.write("Escreva um nome")
    names[i] = io.read()
}

for (y = 0; y < 6; y++) {

    for (i = 0; i < 6; i++) {

        if (names[i] > names[i + 1]) {
            aux = names[i]
            names[i] = names[i + 1]
            names[i + 1] = aux
        }
    }

}
io.write(names)