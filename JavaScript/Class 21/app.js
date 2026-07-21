// function Student(name,age){
//     this.name = name;
//     this.age = age;
//     this.sayHello = function(){
//         console.log("Hello " + this.name);
//     }
// }

// var s1 = new Student("Ali" , 20);
// var s2 = new Student("Rohma" , 15);
// var s3 = new Student("Mahnoor" , 15);



// function Student(name,age){
//     this.name = name;
//     this.age = age;
// }

// Student.prototype.sayHello = function(){
//     console.log("Hello " + this.name);
// }


// var s1 = new Student("Ali" , 20);
// var s2 = new Student("Rohma" , 15);
// var s3 = new Student("Mahnoor" , 15);

// s1.sayHello();
// s2.sayHello();


// function Account(owner,balance){
//     this.owner = owner;
//     this.balance = balance;
// }

// Account.prototype.deposit = function(amount){
//     this.balance += amount
// }
// Account.prototype.showBalance = function(){
//     console.log(this.owner + " : " + this.balance);
    
// }

// var a1 = new Account("Rafia" , 10000);
// var a2 = new Account("Taheerah", 5000);


// a1.deposit(500);
// a2.deposit(10000);


// a1.showBalance();
// a2.showBalance();


// var whereWeAt = window.location.href;
// var host = window.location.hostname;
// var path = window.location.pathname;
// var anchor = window.location.hash;

// console.log(whereWeAt);
// console.log(host);
// console.log(path);
// console.log(anchor);



// function anchor(){
//     // window.location.href = "https://www.google.com/"

//     // history.back()

// }

var catWindow = window.open("./about.html" , "win1" ,"width=420,height=380 , top=200,right=300,left=200");


var windowContent = `<h1>Capuchin monkey</h1><img src='https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750'><p>The word capuchin derives from a
group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown
robes with large hoods covering their heads.</p>`;

// monkeyWindow.location.href = "./about.html"