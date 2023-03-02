let io = require("../../io")

let n
let count = 0
io.write("Escreva um número natural")
n = io.read()

for (i = 0 ; i < n ; i++){
    if (count + 2 <= n){
        count = count + 2
        io.write(count)
    }
}