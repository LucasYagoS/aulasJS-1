let io = require("../../io")

let soma = 0
let media = 0
let i
let nums = 0

while(i != 0){
    console.log("Digite um número real diferente de zero:")
    i = io.readFloat()
    soma = soma + i
    nums++
    if (i === 0){
        nums--
        media = soma / nums
        console.log(`O total de números digitados foi ${nums} e a média desses números é ${media}`)
    }
}
