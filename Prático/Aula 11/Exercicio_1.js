let io = require("../../io")

let nums = [0]
let aux

for (i = 0; i < 10; i++) {
    io.write("Escreva um numero")
    nums[i] = io.readInt()
}
for (y = 0; y < 10; y++) {



    for (i = 0; i < 10; i++) {

        if (nums[i] > nums[i + 1]) {
            aux = nums[i]
            nums[i] = nums[i + 1]
            nums[i + 1] = aux
        }
    }


}
io.write(`${nums}`)