let io = require("../../io")

function tri() {
    var num1
    var num2
    var num3

    console.log("Escreva o número maior:")
    num1 = io.readInt()

    console.log("Escreva outro número:")
    num2 = io.readInt()
    
    console.log("Escreva outro número:")
    num3 = io.readInt()

    if (num1 > num2 + num3 || num2 > num1 + num3 || num3 > num1 + num2) {
        return "Eles não formam um triangulo"
    } else {
        return "Eles formam os lados de um triângulo"
    }

}

io.write(tri())
