let io = require("../../io")



io.write("Escreva um numero inteiro")
let n = io.readInt()
let i = 1
let fat = 1
while (i <= n) {
    fat = fat * i
    i++
}

io.write(fat)