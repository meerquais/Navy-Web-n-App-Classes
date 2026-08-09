const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const status = document.getElementById("status");
const preview = document.getElementById("preview");

const cloudName = "omja6jxv";
const uploadPreset = "upload_preset"



uploadBtn.addEventListener("click" , async ()=>{
    const file = fileInput.files[0];

    if(!file){
        alert("Please select a file");
        return;
    }

    try {

        status.innerText = "Loading...."
        
        const formData = new FormData();

        formData.append("file" , file);

        formData.append("upload_preset" , uploadPreset);


        const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

        const response = await fetch(url, {
            method:"POST",
            body:formData
        })

        const data = await response.json()

        console.log(data);
        

        const imageUrl = data.secure_url;

        preview.src = imageUrl;
        preview.style.display = "block"


        status.innerText = "Uploaded completed!"




    } catch (error) {
        status.innerText = "Error : upload Failed!"
        console.log(error.message);
        
    }




    
})