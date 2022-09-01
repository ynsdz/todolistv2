const todoBttn = document.getElementById("todoButton");
let todoInput = document.getElementById("todoInput"); 

todoBttn.addEventListener('click', () => {
    const todo = {
        text : todoInput.value,
        isCompleted : false,
    }  
  
    const todoContainer = document.getElementById('todo-container')
    let createTodo = document.createElement('li');
    createTodo.textContent = todo.text; 
    createTodo.classList.add('todo-text')
    createTodo.setAttribute('isCompleted', todo.isCompleted);
    todoContainer.appendChild(createTodo);
    todoInput.value = '';
    
    createTodo.addEventListener('click',  (e)=>{
        // let result = condition ? value1 : value2;
        if (e.target.style.textDecoration == 'line-through') {
            e.target.style.textDecoration = 'none';
            e.target.style.opacity = 1;    
        }else {
            e.target.style.textDecoration = 'line-through';
            e.target.style.opacity = 0.5;
        }
    } )
} )
