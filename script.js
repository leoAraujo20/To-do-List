const btnAddEl = document.querySelector(".task-add");
const inputTaskEl = document.querySelector(".task-input");
const taskDateEl = document.querySelector(".date-input");
const taskListEl = document.querySelector(".task-list");

let taskArray = [];

btnAddEl.addEventListener("click", () => {
    addTask();
});

function addTask () {
    const taskText = inputTaskEl.value;
    const taskDate = taskDateEl.value;
    taskArray.push({
        "text": taskText,
        "date": taskDate,
        "done": false,
    });

    displayTasks();
};

function displayTasks() {
    
    taskListEl.innerHTML = "";

    if (taskArray.length === 0) {
        return;
    } else {
        taskArray.forEach((value, index) => {
            if (value["done"] === false) {
                taskListEl.innerHTML += `<Li class="task-item"><button class="btn-done" onclick="taskDone(${index})"></button>
                <span class="task-text">${value["text"]}</span> 
                <span class="task-date">${value["date"]}</span>
                <button class="delete-btn">
                <ion-icon name="trash-outline" class="delete-icon"></ion-icon></button></Li>`;
            } else {
                taskListEl.innerHTML += `<Li class="task-item"><button class="btn-done task-check" onclick="taskDone(${index})"></button>
                <span class="task-text task-done">${value["text"]}</span> 
                <span class="task-date">${value["date"]}</span>
                <button class="delete-btn">
                <ion-icon name="trash-outline" class="delete-icon"></ion-icon></button></Li>`;
            };
        });
        
        const deletelist = document.querySelectorAll(".delete-btn");
        deletelist.forEach((btnDeleteEl, index) => {
            btnDeleteEl.addEventListener("click", () => {
                deleteTask(index)
            });
        });  
        };
    };

function deleteTask (index) {
    taskArray.splice(index, 1);
    displayTasks();
}

function taskDone (index) {
    const taskItemEl = taskListEl.children[index];
    const taskTextEl = taskItemEl.querySelector(".task-text");
    const taskDoneBtnEl = taskItemEl.querySelector(".btn-done");
    taskTextEl.classList.toggle("task-done");
    taskDoneBtnEl.classList.toggle("task-check");
    
    taskArray[index]["done"] = (taskArray[index]["done"] === false) ? true : false;
};