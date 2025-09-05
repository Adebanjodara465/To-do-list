const taskInput = document.querySelector(".add-new");
const taskContainer = document.querySelector(".task-items");

function addTask(text) {
    if (text.trim() ==="") return; //this ignores empty inputs

    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    //to create a p tag with text (like the other already written ones)
    const taskText = document.createElement("p");
    taskText.innerHTML = `<i class="fa-solid fa-poop"></i> ${text}`;

    //then creating the checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-check");

    //marking whenever completed
    checkbox.addEventListener("change", () => {
        taskText.style.textDecoration = checkbox.checked ? "line-through" : "none"; //the crossing-out functionality
        taskText.style.color = checkbox.checked ? "gray" : "#000";
    });

    //delete button and deleeting functionality
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(checkbox);
    taskItem.appendChild(deleteBtn);

    taskContainer.appendChild(taskItem);
    //taskInput.value = ""; //clear the input field after adding a task
}

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask(taskInput.value);
        taskInput.value = "";
   }
});