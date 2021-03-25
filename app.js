//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(e) {
    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML='<i class="fa fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

     //Check Trash Button
     const trashButton = document.createElement('button');
     trashButton.innerHTML='<i class="fa fa-trash"></i>'
     trashButton.classList.add('trash-btn');
     todoDiv.appendChild(trashButton);
    
     //Append To List
     todoList.appendChild(todoDiv);

     //Clear todo input value
     todoInput.value = "";

}

function deleteCheck(e) {
    const item = e.target;

   //Delete TODO
   if(item.classList[0] === 'trash-btn') {
       const todo = item.parentElement;
       //Animation
       todo.classList.add('fall');
       todo.addEventListener('transitionend', function() {
           todo.remove();
       })      
   }

   //Chech Mark 
   if(item.classList[0] === 'complete-btn') {
     const todo = item.parentElement;
     todo.classList.toggle('completed');
   }
}






