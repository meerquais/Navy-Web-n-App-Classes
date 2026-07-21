



function Plan(name,price,space,data,pages,discountMonths){

    this.name = name;
    this.price = price;
    this.space = space;
    this.data = data;
    this.pages = pages
    this.discountMonths = discountMonths;
    this.calcAnnual = function(discount){

        var bestPrice = this.price;
        var currDate = new Date();
        var currentMonth = currDate.getMonth();
        for(var i =0;i < this.discountMonths.length; i++){
            if(this.discountMonths[i] === currentMonth){
                bestPrice = this.price * discount;
                break
            }
        }
       return bestPrice * 12
    }

}

var plan1 = new Plan("Basic" , 3.99 , 100 ,1000,10,[6,7,8]);
var plan2 = new Plan("Professional" , 5.99 , 500 ,5000,50,[3,4,5]);
var plan3 = new Plan("Ulimate" , 9.99 , 2000 ,20000,500,[7,8,9,10]);

console.log(plan1.name);
console.log(plan2.price);
console.log(plan3.space);
console.log(plan3.calcAnnual(.6));
// console.log(plan2.calcAnnual(.75));
// console.log(plan2.calcAnnual());
console.log(plan1.calcAnnual(.5));


