const taskList = document.getElementById('tasks');
const task = document.querySelectorAll('.task');
const taskName = document.getElementById('task-name');
const submitBtn = document.getElementById('submitBtn');


// Function to add a task and check for an empty field
function addTask(){
    if(taskName.value !== ''){
        var newTask = document.createElement('li');
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('remove');
        removeBtn.innerHTML = 'X';
        removeBtn.addEventListener('click', removeTask)
        newTask.classList.add('task');
        newTask.textContent = `${taskName.value}`;
        taskList.prepend(newTask);
        newTask.appendChild(removeBtn);
        taskName.value = []; // Clear the input field on submit
    } else {
        alert("Write down a task!");
    }
}

// Function to removing tasks
function removeTask(e){
    if(confirm("Are you sure want to delete this task?")){
        e.target.parentNode.remove();
        console.log("Deleted!");
    }
}

submitBtn.addEventListener('click', addTask)
// Listen for event listener on enter key
taskName.addEventListener('keydown', (e) => {
    if(e.key == "Enter"){
        addTask();
    }
})