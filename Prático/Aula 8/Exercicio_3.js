let io = require("../../io")

let num

io.write("Digite um numero inteiro:")

num = io.readInt()

function odd_even(num){
    if (num % 2 === 0){
        return "Esse numero é par"
    } else {
        return "Esse numero é impar"
    }
}

let res = odd_even(num)

io.write(res)