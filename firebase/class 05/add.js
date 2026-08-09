import { db , addDoc , collection } from "./config.js";


const addBtn = document.getElementById("addBtn");
const out = document.getElementById("out");

addBtn.addEventListener("click" , async()=>{
    const value = document.getElementById("docValue").value;


    try {

        const docRef = await addDoc(collection(db, "posts"), {
            value:value, createdAt: Date.now()
        })
        out.textContent = `Document added with Auto ID: ${docRef.id} `


    } catch (error) {
        out.textContent = "Error : " + error.message
        
    }



})