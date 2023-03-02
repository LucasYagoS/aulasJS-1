let io = require("../../io")

let high = 0
let nums
let counter

for (counter = 0; counter < 9; counter++){
    console.log("Escreva um número:")
    nums = io.readFloat()
        if (nums > high){
            high = nums
    }
}

console.log(`O maior número é: ${high}`)