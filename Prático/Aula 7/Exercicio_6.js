let io = require("../../io")

io.write("Digite um número inteiro ")
let num = io.readInt()

let vetFib = [0, 1];

for (i = 2; i < num; i++){
    vetFib[i] = vetFib[i - 1] + vetFib[i - 2]
}

for (let i = num - 1; i >= 0; i--){
    io.write(vetFib[i] + " ")
}