import { auth } from "./config.js";
import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";



document.getElementById("loginBtn").addEventListener("click" , async function name() {
    

     const email = document.getElementById("email").value;
     const password = document.getElementById("password").value;
     const img = document.getElementById("img");
     const userName = document.getElementById("userName")

    try {
        const userCredential = await signInWithEmailAndPassword(auth,email,password)
        console.log("Login Successfully!" , userCredential.user);
        alert("Logged in: " + userCredential.user.email)
        img.src = userCredential.user.photoURL;
        userName.innerHTML = userCredential.user.displayName;
        
    } catch (error) {
        console.log("Error: " , error.message);
        alert(error.message)
        
    }



})
