window.addEventListener('load', (Event) => {
    const todoBttn = document.getElementById("todoButton");
    let todoInput = document.getElementById("todoInput"); 
    let todosArray = JSON.parse(localStorage.getItem('todos'));
    if(!todosArray){
        localStorage.setItem("todos", JSON.stringify([]));
    }else{
        todosArray.forEach(element => {
            initTodo(element);
        })
    }
})

const pushTodo = () => {
    const todo = {
            text : todoInput.value,
            isCompleted : false,
            id : Math.floor((Math.random() * 100) + 1),  
        };
    let todosArray = JSON.parse(localStorage.getItem('todos'));

    todosArray.forEach(element => {
        if(element.id == todo.id){
            todo.id = Math.floor((Math.random() * 100) + 1);
        }
    });

    todosArray.push(todo);
    localStorage.setItem('todos', JSON.stringify(todosArray));

    initTodo(todo);
}

 const initTodo = (todo) =>{

    const todoContainer = document.getElementById('todo-container')
    let createTodo = document.createElement('div');
    createTodo.textContent = todo.text; 
    createTodo.classList.add('todo-text');
    
    let container = document.getElementById('todo-container');
    let createList = document.createElement('div');
    createList.classList.add('todo-list');
    createList.setAttribute('data-id', todo.id);
    
    let createDelBtn = document.createElement('button');
    let createEditBtn = document.createElement('button');
    let createEditInp = document.createElement('input');
    createDelBtn.textContent = 'Delete';
    createEditBtn.textContent= 'Edit';
    createDelBtn.classList.add('delete-btn');
    createEditBtn.classList.add('edit-btn');
    createEditInp.classList.add('edit-input');
    
    createList.appendChild(createTodo);
    createList.appendChild(createEditInp);
    createList.appendChild(createEditBtn);
    createList.appendChild(createDelBtn);
    container.appendChild(createList);
    
    todoInput.value = '';

    if(todo.isCompleted){
        createTodo.classList.add('complatedTask');
    }

    createTodo.addEventListener('click', () => {
        let todosArray = JSON.parse(localStorage.getItem('todos'));
        todosArray.forEach(Element => {
            if(Element.id == createTodo.parentElement.dataset.id){
                if(Element.isCompleted){
                    Element.isCompleted = false;
                    createTodo.classList.remove('complatedTask');
                    localStorage.setItem('todos', JSON.stringify(todosArray));
                } else {
                    Element.isCompleted = true;
                    createTodo.classList.add('complatedTask');
                    localStorage.setItem('todos', JSON.stringify(todosArray));
                }
            }
        });
    })
    deleteFunc(createDelBtn);
    editFunc(createEditBtn)
    } 

todoInput.addEventListener('keypress', (event) => {
    if ( event.code == "Enter") {
        if( todoInput.value.trim().length){
            pushTodo();
     }
     else{
        alert('Cannot be empty');
     }
    }
} )
