import { db , doc , setDoc } from "./config.js";


const addBtn = document.getElementById("addBtn");
const out = document.getElementById("out");


addBtn.addEventListener("click" , async ()=>{
    const id = document.getElementById("docId").value.trim();
    const value = document.getElementById("docValue").value;


    if(!id){
        out.textContent = "Please Enter an ID"
        return;
    }


    try {
        await setDoc(doc(db, "users" , id),{
            value , createdAt: Date.now()
        })
        out.textContent = `document created with ID ${id}`
    } catch (error) {
        out.textContent = "Error: " + error.message
    }

})