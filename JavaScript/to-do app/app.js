var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");


var tasks = [];

function renderTasks(){
    taskList.innerHTML = "";

    tasks.forEach((task , index)=>{

        var li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>

            <div class="actions">

                <button onclick="editTask(${index})">Edit</button>

                <button onclick="deleteTask(${index})">Delete</button>

            </div>      
        `
        taskList.appendChild(li)
    })
};


addBtn.addEventListener("click" , function(){
    var task = taskInput.value.trim();

    if(task === ""){
        alert("please enter a task.");
        return;
    }

    tasks.push(task);
    taskInput.value = "";
    renderTasks();
})