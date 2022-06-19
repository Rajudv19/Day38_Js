const prompt = require("prompt-sync")();
var select = prompt("enter the numbers: ");
if(select%2 == 0){
    console.log(select + " is a prime number")
}else{
    console.log(select + " is not a prime number")
}
