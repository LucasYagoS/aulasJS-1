let io = require("../../io")

//30º hora , minutos 6º, 0.5º

let horas = io.readFloat()
let minutos = io.readFloat()

function anguloRelogio (horas , minutos) {
    let angHoras = (horas * 30) + (minutos * 0.5)
    let angMinutos = minutos * 6
    let ang = Math.abs(angHoras - angMinutos)
   
    return ang
}

io.write("O angulo formado pelos ponteiros é: " + anguloRelogio(horas , minutos))