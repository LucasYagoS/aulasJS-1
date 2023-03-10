let io = require("../../io")

let vet = []
let n = io.readInt()
let vetP = []

function vetreverse (){
    for(i = 0 ; i < n ; i++){
        let nums = io.readInt()
        
        if (nums % 2 === 0){
            vetP.push(nums)
        } else {
            vet.push(nums)
        }
    }
    
    return vet

}
io.write("Os numeros impares são: " + vetreverse())
io.write("Os numeros pares são: " + vetP)