import { auth } from "./config.js"
import { updateProfile  } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


document.getElementById("updateBtn").addEventListener("click", async ()=>{
    const user = auth.currentUser;
    const name = document.getElementById("name").value;
    const photo = document.getElementById("photo").value;

    if(user){
        try {
            await updateProfile(user,{
                displayName: name,
                photoURL: photo
            });

            alert("Profile updated!")
        } catch (error) {
            console.log(error.message);
            
        }
    }else{
        alert("No User Logged IN!")
    }



} )