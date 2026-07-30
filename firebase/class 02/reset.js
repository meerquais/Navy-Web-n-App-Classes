import {auth} from "./config.js";
import { sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";



document.getElementById("resetBtn").addEventListener("click" ,async function(){


    const email = document.getElementById("email").value;


    // console.log(email);

    try {
        await sendPasswordResetEmail(auth, email);
        alert("Reset Email Sent to: " + email);
    } catch (error) {
        console.log(error.message);
        
    }
    


})