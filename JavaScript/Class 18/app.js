// var inputTask = document.getElementById("inputTask");
// var addBtn = document.getElementById("addBtn");
// var taskList = document.getElementById("taskList");

// var tasks = [];


// function renderTask(){
//     taskList.innerHTML = "";

//     tasks.forEach((task , index)=>{
        

//         var li = document.createElement("li");

//         li.innerHTML = `

//         <span>${task}</span>

//         <button onclick="taskEdit(${index})">Edit</button>
//         <button onclick="deleteTask(${index})">Delete</button>
        
        
//         `

//         taskList.appendChild(li)        
//     })
// }

// addBtn.addEventListener("click", function(){
//     var inputValue = inputTask.value.trim();
//     if(inputValue === ""){
//         alert("Please Enter a task")
//         return;
//     }

//     tasks.unshift(inputValue);
//     inputTask.value = "";
//     renderTask();
    
// })
// function taskEdit(index){
//     var updateInput = prompt("Update your Task." , tasks[index])
//     if(updateInput !== null && updateInput !== ""){
//         tasks[index] = updateInput;
//         renderTask()
//     }
// }

// function deleteTask(index){
//     tasks.splice(index,1);
//     renderTask()
// }

// function deleteAll(){
//     tasks = [];
//     renderTask();
// }



// var obj = {}

var plan1 = {
    name:"Basic",
    price:3.99,
    space:"100GB",
    data:"1000GB/Mo",
    pages:10
};

// console.log(plan1);

// Dot Notation
// Bracket Notation

// Dot Notation

plan1.price = 5.99

console.log(plan1.name);
console.log(plan1.price);

// Bracket Notation

console.log(plan1["space"]);
console.log(plan1["data"]);
