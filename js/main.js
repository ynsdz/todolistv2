const todoStore = [];
const todoBttn = document.getElementById("todoButton");
let todoInput = document.getElementById("todoInput"); 

todoInput.addEventListener('keypress', (event) => {
    if ( event.code == "Enter") {
        if( todoInput.value.trim().length){

        const todo = {
            text : todoInput.value,
            isCompleted : false,
            id : Math.floor((Math.random() * 100) + 1),
        };
        todoStore.push(todo);
        
        const todoContainer = document.getElementById('todo-container')
        let createTodo = document.createElement('div');
        createTodo.textContent = todo.text; 
        createTodo.classList.add('todo-text');
        
        let container = document.getElementById('todo-container');
        let createList = document.createElement('div');
        createList.classList.add('todo-list');
        createList.setAttribute('data-id', todo.id);
        console.log(createList.dataset.id);
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
            todoStore.forEach(Element => {
                if(Element.id == createTodo.parentElement.dataset.id){
                    if(Element.isCompleted){
                        Element.isCompleted = false;
                        createTodo.classList.remove('complatedTask');
                    } else {
                        Element.isCompleted = true;
                        createTodo.classList.add('complatedTask');
                    }
                }
            });
        })
        deleteFunc(createDelBtn);
        editFunc(createEditBtn, todo, createList);
     }
     else{
        alert('Cannot be empty');
     }
    }
} )
