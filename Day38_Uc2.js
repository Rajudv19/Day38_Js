var firstValue =  Math.floor(Math.random() * 5 + 100);
var secondValue = Math.floor(Math.random() * 5 + 100);
var thirdValue =  Math.floor(Math.random() * 5 + 100);
var fourthValue = Math.floor(Math.random() * 5 + 100);
var fifthValue =  Math.floor(Math.random() * 5 + 100);

if(firstValue == 101 ){
console.log("this is min random number : first value : " + firstValue );
}else if(secondValue == 101){
    console.log("this is min random number : second value :" + secondValue);
}else if(thirdValue == 101){
    console.log("this is min random number : third value : " + thirdValue);
}else if(fourthValue == 101){
    console.log("this is min random number : fourth value :  " + fourthValue);
}else if(fifthValue == 101){
    console.log("this is min random number : fifth value : " + fifthValue);
}

if(firstValue == 104){
    console.log("this is max random number : first value : " + firstValue );
    }else if(secondValue == 104){
        console.log("this is max random number : second value : "+ secondValue);
    }else if(thirdValue == 104){
        console.log("this is max random number : third value : " + thirdValue);
    }else if(fourthValue == 104){
        console.log("this is max random number : fourth value : " + fourthValue);
    }else if(fifthValue == 104){
        console.log("this is max random number : fifth value : " + fifthValue);
    }
console.log("****************************************************");

//take input from user as a year...

const prompt = require("prompt-sync")();
var year = prompt("Enter a year to check it is leap year or not =  ");

if(((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0)){
    console.log(year + " is a leap year ");
}else{
    console.log(year + " is not a leap year");
}

//coin flip 
var coinFlip = Math.floor(Math.random() * 3);
if(coinFlip == 1){
    console.log("It is a head ");
}else{
    console.log("It is a tail ");
}