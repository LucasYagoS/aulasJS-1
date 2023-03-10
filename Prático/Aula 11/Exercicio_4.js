let io = require("../../io")


let nums = []
let control


function vetReverse(nums) {
    io.write("Escreva a quantidade de numeros do vetor")
    let n = io.readInt()
    let aux

    for (i = 0; i < n; i++) {
        io.write("Escreva um numero")
        nums[i] = io.readInt()
    }


    for (y = 0; y < n; y++) {

        for (i = 0; i < n; i++) {

            if (nums[i] > nums[i + 1]) {
                aux = nums[i]
                nums[i] = nums[i + 1]
                nums[i + 1] = aux
            }
        }
    }

    if (control === "D") {
        
        return nums.reverse()
    } else {
        return nums
    }

}

io.write("Escreva 'D' para ordem decrescente ou qualquer coisa para ordem crescente")
control = io.read()

io.write(vetReverse(nums))