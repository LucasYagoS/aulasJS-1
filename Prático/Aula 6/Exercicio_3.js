let io = require("../../io")

let name
let namen = 0
for(i = 0 ; i < 10 ; i++){
    io.write("Escreva um nome:")
    name = io.read()
    if (name === "maria"){
        namen++
    }
}

io.write(`${namen} se chamam maria`)

//Feito por LucasYago