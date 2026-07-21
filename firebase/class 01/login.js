import { auth } from "./config.js";
import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";



document.getElementById("loginBtn").addEventListener("click" , async function name() {
    

     const email = document.getElementById("email").value;
     const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth,email,password)
        console.log("Login Successfully!" , userCredential.user);
        alert("Logged in: " + userCredential.user.email)
        
    } catch (error) {
        console.log("Error: " , error.message);
        alert(error.message)
        
    }



})
