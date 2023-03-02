let io = require("../../io")

var num
var res
var div = 0

io.write("Digite um número natural:")
num = io.readFloat()

for (count = 1 ; count <= num ; count++){
    if (num % count == 0){
        div++
    }
}
if (div == 2){
    io.write("Esse número é primo")
} else {
    io.write("Esse número não é primo")
}