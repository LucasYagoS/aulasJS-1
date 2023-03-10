let io = require("../../io")

let dividendo
let divisor

dividendo = io.readFloat()
divisor = io.readFloat ()
function div(dividendo, divisor) {
    let quociente = 0;
    let resto = dividendo;
    while (resto >= divisor) {
      resto = resto - divisor;
      quociente++;
    }
    return [quociente, resto];
  }


  io.write (div(dividendo , divisor))