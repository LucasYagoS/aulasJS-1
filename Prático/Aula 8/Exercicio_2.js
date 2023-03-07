let io = require("../../io")

let age
let i
io.write("Escreva a idade do nadador para saber sua categoria:")
age = io.readFloat()

function type(age){
    if (age > 4 && age < 8){
        i = "Infantil A"
    } else if (age > 7 && age < 11){
        i = "Infantil B"
    } else if (age > 10 && age < 14){
        i = "Juvenil A"
    } else if (age > 13 && age < 18){
        i = "Juvenil B"
    } else {
        i = "Adulto"
    }
    return i
}


let res = type(age)
io.write(res)