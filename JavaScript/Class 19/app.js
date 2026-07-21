// var student1 = ["Rohma" , 15 , 23 , "rohma@gmail.com" , 11];

// console.log(student1);

var student1 = {
  name: "Rohma",
  age: 15,
  rollNumber: 23,
  email: "rohma@gmail.com",
  class: 11,
};
var car = {
  name: "Toyota",
  year: 2025,
  color: "black",
};
// console.log(student1);
// console.log(car);

// Dot Notation
// Bracket Notation // Array Notation

// Dot Notation.

// console.log(student1.name);

// Bracket Notation

// console.log(car["name"]);
// console.log(student1.name);

student1.name = "Maria";
student1.gender = "female";

delete student1.rollNumber;
delete student1.email;
console.log(student1);

var person = {
  name: "Fatima",
  greet: function () {
    console.log("Hello Tayyaba");
  },
};

console.log(person);

console.log(person.greet());

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
  discountMonths: [5,6],
  calcAnnual:function(discount){
     var bestPrice = plan1.price;
    var currentDate = new Date();
    var thisMonth = currentDate.getMonth();
    for(var i =0; i < plan1.discountMonths.length; i++){
        if(plan1.discountMonths[i] === thisMonth){
            bestPrice = plan1.price * discount;
            break;
        }
    }

    return bestPrice * 12;
  }
};

console.log(plan1.calcAnnual(.7));


// function calcAnnual(discount){
//     var bestPrice = plan1.price;
//     var currentDate = new Date();
//     var thisMonth = currentDate.getMonth();
//     for(var i =0; i < plan1.discountMonths.length; i++){
//         if(plan1.discountMonths[i] === thisMonth){
//             bestPrice = plan1.price * discount;
//             break;
//         }
//     }

//     return bestPrice * 12;
// }

// var AnnualPrice = calcAnnual(.5);


// console.log(AnnualPrice);

