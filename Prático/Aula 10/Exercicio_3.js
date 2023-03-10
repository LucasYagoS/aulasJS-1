let io = require("../../io")

let nums = []

function soma(){
    let count = 0
    let soma = 0
    let i = 0
    while (count != -1){
        count = io.readFloat()
        if (count != -1){
            i++
            nums.push(count)
            soma += count
        }
    }
    return soma / i
}
io.write(`A media de todos os numeros deu: ${soma()}`)
io.write("Os numeros digitados foram: " + nums)