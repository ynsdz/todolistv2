const todoBttn = document.getElementById("todoButton");
let todoInput = document.getElementById("todoInput"); 
const formfalan = document.getElementById('form');

todoInput.addEventListener('keypress', (event) => {
    if ( event.code == "Enter") {
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
            if (e.target.style.textDecoration == 'line-through') {
                e.target.style.textDecoration = 'none';
                e.target.style.opacity = 1;    
            }else {
                e.target.style.textDecoration = 'line-through';
                e.target.style.opacity = 0.5;
            }
        } )
    }
} )
