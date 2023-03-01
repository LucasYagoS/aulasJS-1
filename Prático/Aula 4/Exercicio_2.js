let io = require("../../io")

let media = 0
let counter = 0
let counter2 = 5
let res = 0
while (counter < 5) {
    io.write(`Escreva ${counter2} números`)
    let nums = io.readFloat()
    media = media + nums
    counter = counter + 1
    counter2 = counter2 - 1
}

res = media / 5
io.write(`A média é: ` + res)