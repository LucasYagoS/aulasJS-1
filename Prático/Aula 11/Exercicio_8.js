let io = require("../../io")

let min = 1
let max = 60


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
  for(i = 0 ; i < 6  ; i++){
    io.write(getRandomInt(min, max))
  }