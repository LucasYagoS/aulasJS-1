let io = require("../../io")

let n
let times = 0
io.write("escreva um número natural")
n = io.read()

for (i = 0 ; i < n ; i++){
    
    times++
    io.write(times)
}