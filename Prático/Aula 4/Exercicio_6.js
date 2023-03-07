let io = require("../../io")

let i
let fib = 1
let fib2 = 1
let res = []

i = io.readInt()

while(i > 0){
    res = fib + fib2
    fib = fib2
    fib2 = res
    i--
    io.write(res)
}
