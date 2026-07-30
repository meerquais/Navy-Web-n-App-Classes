import { auth } from "./config.js";

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

document.getElementById("signupBtn").addEventListener("click" ,async function(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signup Done: " ,userCredential.user );
        alert("User Created: " + userCredential.user.email)

    } catch (error) {
        console.log("Error: " , error.message);
        alert(error.message)
        
    }



})
