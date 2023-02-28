let io = require("../../io")


let a
let b
let c
let delt

io.write("Equação de segundo grau")
io.write("Digite valor de a")
a = io.read()

io.write("Digite valor de b")
b = io.read()

io.write("Digite valor de c")
c = io.read()

delt = b ** 2 - (4 * a * c)
if (delt < 0) {
    io.write("A equação não possui raízes reais");
} else if (delt === 0) {
    const x = -b / (2 * a);
    io.write("A equação possui uma raiz real: ${ x }");
} else {
    const x1 = (-b + delt ** 1 / 2) / (2 * a);
    const x2 = (-b - delt ** 1 / 2) / (2 * a);
    io.write("A equação possui duas raízes reais: ${ x1 } e ${ x2 }");
}


