let io = require("../../io")

let login
let pass

console.log("Digite seu Login:")
login = io.read()

console.log("Digite sua Senha:")
pass = io.read()

if (login === "admin" && pass === "admin"){
    console.log("Bem-vindo ao sistema")
} else {
    console.log("Dados invalidos")
}