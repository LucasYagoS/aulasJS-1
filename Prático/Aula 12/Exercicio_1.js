let io = require("../../io")

let vet = []

function array (vet){

    let aux
    let count = 0
    let soma = 0
    let n = io.readFloat()
    for (i = 0 ; i < n ; i++){
        aux = io.readFloat()
        if (aux % 2 != 0){
            vet.push(aux)  
        }
    }
    vet.forEach(element => {
        soma = soma + element
    });
    while(count < soma){
        io.write("Java Script é muito bom")
        count++
    }
}

array(vet)