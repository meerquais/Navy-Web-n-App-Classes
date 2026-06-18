console.log("JavaScript Connected!");



// console.log(20 + 30);
// console.log(33 + 30);


// console.log("Hello User!");


// function syntax

// function functionName(parameter){
//     // block of code
// }

// functionName()

// function greeting(){
//     console.log("Welcome User!");
// }


// greeting();
// greeting();
// greeting();


// function greetUser(userName){
//     console.log(userName);
    
// }


// greetUser("Ahrar")


// function add(a,b){
//     console.log(a + b);
// }

// add(30 , 60)
// add(333, 60)



// function user(userName , email , age){
//     console.log("USER NAME ====>" + userName);
//     console.log("USER EMAIL ====>" + email);
//     console.log("USER AGE ====>" + age);  
// }

// user("Meer","meer@gmail.com" , 26)


// var userName = "Meer";

// function greet(){
//     var userName = "Minhaj"
//     console.log("Welcome to our Website " + userName);
// }

// greet()
// console.log(userName);


// function add(a,b){ 
//     return   a + b    
// }

// console.log(add(20,22));


function tellTime(){
    var rightNow = new Date()
    var hrs = rightNow.getHours()
    var mins = rightNow.getMinutes();
    var secs = rightNow.getSeconds();
    console.log(hrs + ":" + mins + ":" + secs)
}

tellTime()