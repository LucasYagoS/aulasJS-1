let io = require("../../io")

let num

io.write("Digite um numero inteiro:")

num = io.readInt()

function odd_even(num){
    if (num % 2 === 0){
        return true
    } else { 
        return false
    }
}

let res = odd_even(num)
if(res === true){
    io.write("Este numero é par")
} else {
    io.write("Esse numero é impar")
}