const prompt = require("prompt-sync")();
var select = prompt("Enter 1,10,100,1000 to get numbers in letters : ");

switch(select) {
    case '1' :
        console.log("ONE " );
        break;
    case '10' :
        console.log("TEN ");
        break;
    case '100' :
        console.log("HUNDRED");
        break;
    case '1000' :
        console.log("THOUSAND");
        break;
    default :
        console.log("Please select the correct given numbers");
}