const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector('.tasks');

// Listener for the Enter key
taskInput.addEventListener("keyup", (e) => {
    if(e.key === "Enter") createTask();
});

// Onclick event for the 'Add' button
document.querySelector('#push').onclick = function(){
    createTask();
}

// Function to create a task
function createTask() {
    if (taskInput.value.length === 0) {
        alert("The task field is blank. Enter a task name and try again.");
    } else {
        // Insert HTML that creates each task
        taskSection.innerHTML += `
            <div class="task">
              <label class="taskname">
                <input onclick="updateTask(this)" type="checkbox">
                <p>${taskInput.value}</p>
              </label>
              <div class="delete">
                <i class="ui ui-trash"></i>
              </div>
            </div>`;
        
        // Add delete functionality
        const currentTasks = document.querySelectorAll(".delete");
        currentTasks.forEach((deleteButton) => {
            deleteButton.onclick = function() {
                this.parentNode.remove();
                updateOverflow();
            }
        });

        // Clear the task input after adding
        taskInput.value = "";

        // Check for overflow in the task section
        updateOverflow();
    }
}

// Function to handle task completion
function updateTask(task) {
    let taskItem = task.parentElement.querySelector('p');
    if (task.checked) {
        taskItem.classList.add("checked");
    } else {
        taskItem.classList.remove("checked");
    }
}

// Function to handle task section overflow
function updateOverflow() {
    taskSection.offsetHeight >= 300
        ? taskSection.classList.add("overflow")
        : taskSection.classList.remove("overflow");
}
