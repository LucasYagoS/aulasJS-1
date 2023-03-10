let io = require("../../io")


let nums = []
let nums2 = []


function vetReverse(nums) {
    let aux

    for (i = 0; i < 10; i++) {
        io.write("Escreva um numero")
        aux = io.readInt()
        if (aux % 2 === 0) {
            nums2.push(aux)
        } else {
            nums.push(aux)
        }
    }
    for (y = 0; y < 10; y++) {
        for (i = 0; i < 10; i++) {
            if (nums[i] > nums[i + 1]) {
                aux = nums[i]
                nums[i] = nums[i + 1]
                nums[i + 1] = aux
            }
            if (nums2[i] > nums2[i + 1]) {
                aux = nums2[i]
                nums2[i] = nums2[i + 1]
                nums2[i + 1] = aux
            }
        }
    }

    return [nums2, nums.reverse()]

}



io.write(vetReverse(nums))