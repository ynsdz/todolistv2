const todoBttn = document.getElementById("todoButton");
let todoInput = document.getElementById("todoInput"); 
const formfalan = document.getElementById('form');

todoInput.addEventListener('keypress', (event) => {
    if ( event.code == "Enter") {
        const todo = {
            text : todoInput.value,
            isCompleted : false
        };

        
        const todoContainer = document.getElementById('todo-container')
        let createTodo = document.createElement('li');
        createTodo.textContent = todo.text; 
        createTodo.classList.add('todo-text')

        let container = document.getElementById('todo-container');
        
        let createList = document.createElement('div');
        createList.classList.add('todo-list');

        let createDelBtn = document.createElement('button');
        let createEditBtn = document.createElement('button');
        createDelBtn.textContent = 'Delete';
        createEditBtn.textContent= 'Edit';
        createDelBtn.classList.add('delete-btn');
        createEditBtn.classList.add('edit-btn');
        
        createList.appendChild(createTodo);
        createList.appendChild(createDelBtn);
        createList.appendChild(createEditBtn);
        container.appendChild(createList);
        
        todoInput.value = '';
        
        createTodo.addEventListener('click',  ()=>{
            if (todo.isCompleted) {
                todo['isCompleted'] = false;
                createTodo.classList.remove('complatedTask');

            }else {
                todo.isCompleted = true; 
                createTodo.classList.add('complatedTask');
            }
        } )
    }
} )
