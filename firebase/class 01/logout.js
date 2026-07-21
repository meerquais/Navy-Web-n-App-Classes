import { auth } from "./config.js";
import { signOut  } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


document.getElementById("logoutBtn").addEventListener("click" , async function() {
    

    try {
        await signOut(auth);
        console.log("Sign out successfully!");
        
    } catch (error) {
        console.log(error.messag);
        
    }
        
})