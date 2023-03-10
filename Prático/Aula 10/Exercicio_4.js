let io = require("../../io")

let vet = []
io.write("Digite a quantidade de numeros que você ira digitar")
let n = io.readInt()


function vetreverse (){
    let y = n
    for(i = 0 ; i < n ; i++){
        io.write(`Faltam ${y} numeros`)
        vet[i] = io.readInt() 
        y--
    }
    vet.reverse()
    return vet

}

io.write(vetreverse())