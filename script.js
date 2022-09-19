const input = document.querySelector('input');
const addBtn = document.querySelector('.add-btn');
const todoItems = document.querySelector('.todo-items');


//Events
addBtn.addEventListener('click', addTask);
todoItems.addEventListener('click', deleteCheck);



//Functions
function addTask() {
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-task');
    newTodo.innerText = input.value
    todoDiv.appendChild(newTodo);
    

    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.classList.add('complete-btn');
    todoDiv.appendChild(completeBtn);

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);

    todoItems.appendChild(todoDiv)
}

function deleteCheck(event) {
    const target = event.target;
    const todo = target.parentElement;

    if (target.classList[0] === 'complete-btn') {
       todo.classList.add('completed');
    }

    if(target.classList[0] === 'trash-btn') {
        todo.remove();
    }
}