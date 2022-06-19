const prompt = require("prompt-sync")();
var num = prompt("enter the numbers between 1 to 5 to get a factorial : ");
console.log("Selected option is: " + num);

switch(num) {
    case '1' :
        console.log(" calculation of factorial is 1 " );
        break;
    case '2' :
        var two = 1*2; 
        console.log(" factorial calculation is : "+ two);
        break;
    case '3' :
        var three = 1*2*3;
        console.log("factorial calculaton is : "+ three);
        break;
    case '4' :
        var four = 1*2*3*4;
        console.log("factorial value is : "+ four);
        break;
    case '5' :
        var five = 1*2*3*4*5;
            console.log("factorial value is :"+ five);
            break;
    default :
        console.log("Please select the correct given numbers");
}