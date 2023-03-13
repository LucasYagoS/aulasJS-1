let io = require("../../io")

let vet = []

function multplica(vet) {
    let n = 0
    let aux = 0
    io.write("Digite o numero de casas do vetor")
    n = io.readFloat()

    for (i = 0; i < n; i++) {
        io.write("Escreva um numero")
        aux = io.readFloat()
        vet.push(aux)
    }
    novoVet = vet.map(element => {
        if (element % 2 === 0) {
            return element * 4
        }
        return element * 3
    });
    
    res = novoVet.filter(num => {
        if (num > 100){
            io.write(num)
        }
    })
}
multplica(vet)