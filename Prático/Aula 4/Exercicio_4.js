let io = require("../../io")

let n
let counter = 0
let number = 0
io.write("Escreva um némero inteiro:")
n = io.readInt()

while(counter < n){
    io.write(number)
    number = number + 5
    counter++
}