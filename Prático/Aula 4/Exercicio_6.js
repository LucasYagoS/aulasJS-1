let io = require("../../io")

let i = 48
let fib = 1
let fib2 = 1
let res
io.write("1")
io.write("1")
while(i > 0){
    res = fib + fib2
    fib = fib2
    fib2 = res
    i--
    io.write(res)
}
