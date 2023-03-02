let io = require("../../io")

let all
let white
let nul
let val
let perwhite
let pernul
let perval

console.log("Digite o número de eleitores:")
all = io.readFloat()

console.log("Digite o número de votos brancos:")
white = io.readFloat()

console.log("Digite o número de votos nulos")
nul = io.readFloat()

console.log("Digite o número de votos válidos")
val = io.readFloat()

perwhite = (white / all) * 100
pernul = (nul / all) * 100
perval = (val / all) * 100

console.log(`O percentual de votos é: Brancos ${perwhite}%, Nulos ${pernul}% e Válido ${perval}%`)

