let io = require("../../io")



let string1 = io.read()
let string2 = io.read()

function stringdel(string1 , string2){
    let stringnova = ""
    for(i = 0 ; i < string1.length ; i++){
        if(string1[i] != string2[0]){
            stringnova += string1[i]
        }
    }

    return stringnova
}

io.write(stringdel(string1 , string2))