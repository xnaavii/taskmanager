const taskList = document.getElementById('tasks');
const taskNameInput = document.getElementById('task-name');
const submitBtn = document.getElementById('submitBtn');


// Function to add a task and check for an empty field
function addTask(){
    const taskName = taskNameInput.value.trim();
    if(taskNameInput.value !== '') {
        const li = document.createElement('li');
        li.classList.add('task');
        li.textContent = taskName;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('fa-solid','fa-trash','fa-sm','remove');
        removeBtn.addEventListener('click', removeTask)
        
        const completeBtn = document.createElement('button');
        completeBtn.classList.add('fa-solid', 'fa-check','fa-sm', 'complete');
        completeBtn.addEventListener('click', toggleTaskCompletion);

        const buttons = document.createElement('div');
        buttons.classList.add('task-buttons');
        buttons.appendChild(removeBtn)
        buttons.appendChild(completeBtn)

        li.appendChild(buttons);
        taskList.prepend(li);
        
        console.log('Task Added', li);
        taskNameInput.value = ''; // Clear the input field on submit
    } else {
        alert("Write down a task!");
    }
}

// Function to removing tasks
function removeTask(e){
    const taskItem = e.target.closest('li.task');
    if (taskItem) {
        taskItem.remove();
        console.log("Task removed!");
    }
}

function toggleTaskCompletion(e){
    const taskItem = e.target.closest('li.task');
    if(taskItem){
        taskItem.classList.toggle('task-text');
    }
}

submitBtn.addEventListener('click', addTask)
// Listen for event listener on enter key
taskNameInput.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        addTask();
    }
});