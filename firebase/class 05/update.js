import { db , doc , updateDoc } from "./config.js";


const updateBtn = document.getElementById("updateBtn");
const out = document.getElementById("out");



updateBtn.addEventListener("click" , async ()=>{

    const id = document.getElementById("docId").value.trim();
    const value = document.getElementById("docValue").value;

    if(!id){
        out.textContent = "Please Enter Doc ID";
        return;
    }


    try {
        await updateDoc(doc(db,"users" , id) , {
            value:value , updatedAt:Date.now()
        });

        out.textContent = `Document ${id} updated!`
    } catch (error) {
        out.textContent = "Error : " + error.message
    }



})