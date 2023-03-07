let io = require("../../io")

let x
let z
let res

io.write("Escreva o valor de X")
x = io.readInt()
io.write("Escreva o valor de Z")
z = io.readInt()
let y = x
function power(x , z){
    for(i = 1 ; i < z ; i++){
        x *= y
    }
    return x
}

res = power(x , z)

io.write("A resposta é: " + res)