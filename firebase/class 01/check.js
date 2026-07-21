import { auth } from "./config.js";

document.getElementById("checkBtn").addEventListener("click" , async function() {
    
    const user = auth.currentUser;
    if(user){
        alert("Current User: " + user.email)
        console.log("Current User: " + user.email)
    }else{
        console.log("No user is logged in!");
        
    }


})