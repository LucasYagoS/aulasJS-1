let io = require("../../io")

let res
let notas = []
let count = 0

io.write("Escreva a nota dos alunos")

function med (){

    let soma = 0
    let media = 0
    let num

    while(num != -1){
        io.write("Escreva um número inteiro")
        num = io.readFloat()
        if (num != -1){
        soma += num
        notas[count] = num
        count++
        }
    } 
    return media = soma / count
}

res = med()
io.write("A media é: " + res)
io.write("As notas acima da média são:")
for(i = 0 ; i < count ; i++){
    if (notas[i] > res){
        io.write(notas[i])
    }
}

