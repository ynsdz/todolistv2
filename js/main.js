
const todoBttn = document.getElementById("todoButton");
let todoInput = document.getElementById("todoInput"); 

todoInput.addEventListener('keypress', (event) => {
    if ( event.code == "Enter") {
        if( todoInput.value.trim().length){

            const todo = {
                text : todoInput.value,
                isCompleted : false
            };
            
            
            const todoContainer = document.getElementById('todo-container')
            let createTodo = document.createElement('li');
        createTodo.textContent = todo.text; 
        createTodo.classList.add('todo-text');
        
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
        createList.appendChild(createEditBtn);
        createList.appendChild(createDelBtn);
        container.appendChild(createList);
        
        todoInput.value = '';

        createTodo.addEventListener('click', () => {
            if (createTodo.classList.contains('complatedTask')) {
                todo['isCompleted'] = false;
                console.log(createTodo);
                createTodo.classList.remove('complatedTask');
                console.log(createTodo);

                
            }else {
                todo.isCompleted = true; 
                console.log(createTodo);
                createTodo.classList.add('complatedTask');
                console.log(createTodo);

            }

        } )
        
        deleteFunc(createDelBtn);
        editFunc(createEditBtn, todo, createList, createTodo);
     }
     else{
        alert('Cannot be empty');
     }
    }
} )
