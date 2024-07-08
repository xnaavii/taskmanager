const taskList = document.getElementById('tasks')
const task = document.querySelector('.task')
const taskName = document.getElementById('task-name')
const submitBtn = document.getElementById('submitBtn')

// Function to add a task and check for an empty field
function addTask(){
    if(taskName.value !== ''){
        var newTask = document.createElement('li');
        newTask.classList.add('task');
        newTask.textContent = taskName.value;
        taskList.prepend(newTask);
        taskName.value = []; // Clear the input field on submit
    } else {
        alert("Write down a task!");
    }
}

submitBtn.addEventListener('click', addTask)

// Listen for event listener on enter key
taskName.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        addTask();
    }
})