console.log("JavaScript Connected!");



// var fruits = ["Apple" , "Mango" , "Orange" , "Kiwi","Banana" , "Strawberry" , "Dragonfruit"]

// fruits.splice(2,0,"Banana" , "Strawberry");


// console.log(fruits);


// var fruitsCopy = fruits.slice(3,5)
// var fruitsCopy = fruits.slice(3)
// var fruitsCopy = fruits.slice(-4)

// console.log(fruits);
// console.log(fruitsCopy);


// var num = 10;

// if(num % 2 === 0){
//     console.log("Even!");
    
// }else{
//     console.log("Odd");
    
// }



// for(initialization;condition ; incre/decre){
//     block of code
// }


// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);
// console.log(11);
// console.log(12);
// console.log(13);
// console.log(14);
// console.log(15);
// console.log(16);
// console.log(17);
// console.log(18);
// console.log(19);
// console.log(20);


// for(var i = 1;i <=20; i++){
//     console.log(i);
    
// }

// for(var i = 20;i >= 1;i--){
//     console.log(i);
    
// }

// for(var i =0; i < 20;i++){
//     if(i % 2 === 1){
//         console.log(i);
        
//     }
// }

// var num = 2;
var num = +prompt("Type table");
var count = +prompt("How many times");

for(var i = 1; i <= count;i++){
    // console.log(num + " x " + i + " = " + (num * i));
    document.write(num + " x " + i + " = " + (num * i) + "<br />");
    
}