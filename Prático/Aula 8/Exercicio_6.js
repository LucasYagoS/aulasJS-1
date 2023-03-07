// Faça uma função que leia um número não determinado de valores positivos e retorna a média aritmética dos mesmos. (Utilize o número -1 como critério de parada da repetição).
let io = require("../../io")

let res
function med (){
    let soma = 0
    let media = 0
    let count = 0
    let num

    while(num != -1){
        
        io.write("Escreva um número inteiro")
        num = io.readFloat()
        if (num != -1){
        soma += num
        count++
        }
    } 
    
    return media = soma / count
}

res = med()

io.write("A media é: " + res)
