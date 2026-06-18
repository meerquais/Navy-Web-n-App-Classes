// function greetUser(){
//     alert("Hello")
// }


var display = document.getElementById("display");

// console.log(display);


function showFieldValue(){
    if(display.value === ""){
        alert("Please Enter Value")
    }else{
        console.log(display.value);
        
    }
    
}

var zip = document.getElementById("zip");
var city = document.getElementById("city");

function fillCity(){

    if(zip.value === "74000"){
        city.value = "Karachi"
    }else if(zip.value === "54000"){
        city.value = "Lahore"
    }else if(zip.value ==="44000"){
        city.value = "Islamabad"
    }


}