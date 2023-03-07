let io = require("../../io")

let years
let months
let days
let res = 0

io.write("Escreva quantos respectivamente a sua idade atual em - Anos - Meses - Dias")
years = io.readInt()
months = io.readInt()
days = io.readInt()

function age(years , months , days){
    return (years * 365) + (months * 30) + days
}

res = age(years , months , days)
io.write("Sua idade é: " + res)