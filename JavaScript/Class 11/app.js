console.log("JavaScript Connected!");


// var username = "meer";

// var war = "World War II"

// var text = "apple are good, we should eat apple."

// console.log(username.charAt(3));
// console.log(war.indexOf("War"));
// console.log(text.indexOf("Apple"));
// console.log(text.lastIndexOf("Apple"));


// console.log(text.replaceAll("Apple" , "Orange"));
// console.log(text.replace(/Apple/gi , "Orange"));

// var num = 10.9;
// var round = Math.round(num);
// var ceil = Math.ceil(num)
// var floor = Math.floor(num)

// console.log(round);
// console.log(ceil);
// console.log(floor);

// var random = Math.floor((Math.random() * 9999) + 1)

// console.log(random);

// var str = "nine hundred ninty nine"
// var num = parseInt(str)
// var float = parseFloat(str)
// var number = Number(str)
// console.log(typeof str , str);
// console.log(typeof num , num);
// console.log(typeof float , float);
// console.log(typeof number , number);

// var num = 99;
// var str = num.toString()

// console.log(typeof num , num);
// console.log(typeof str , str);


// var num = 87.7967485;

// console.log(Number(num.toFixed(2)));


// var rightNow = new Date();
// var dateString = rightNow.toString()

// console.log(typeof rightNow , rightNow);
// console.log(typeof dateString , dateString);

// var rightNow = new Date();

// var days = ["Sun" , "Mon" , "Tues" , "Wed" , "Thurs" , "Fri" , "Sat"]

// var day = rightNow.getDay();

// console.log(days[day]);


var random = Math.floor((Math.random() * 10) + 1)
var guess = +prompt("Type your guess from 1 - 10");

if(guess === random){
    alert("Congo You Won!")
}else{
    alert("Better luck next time! Right Number was " + random)
}