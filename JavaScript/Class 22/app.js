// function checkForLastName(){
//     if(document.getElementById("lastNameField").value.length === 0){
//         alert("Please Enter Your Last Name");
//         document.getElementById("lastNameField").focus();
//         return false;
//     }
// }

// function checkForLastName(){
//     var field = document.getElementById("lastNameField");
//     if(field.value.length === 0){
//         alert("Please Enter your last name");
//         field.focus();
//         field.style.backgroundColor = "red";
//         return false
//     }
//     field.style.backgroundColor = "white";

// }


// function checkForSelection(){
//     if(document.getElementById("cities").selectedIndex === 0){
//         alert("Please Select a city!")
//         return false;
//     }
// }

// function validateRadios(){
//     var radios = document.getElementsByName("r1");
//     for(var i = 0; i < radios.length; i++){
//         if(radios[i].checked){
//             return true
//         }
//     }
//     alert("Please Check one!");
//     return false;
// }


function submitEmail(){
    var email = document.getElementById("email").value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(email)){
        alert("Type a valid Email!")
        return false;
    }
    console.log("Done!");
    
}