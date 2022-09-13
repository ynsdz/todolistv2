const todoStore = [];
localStorage.setItem("todos", JSON.stringify([]));
const todoBttn = document.getElementById("todoButton");
let todoInput = document.getElementById("todoInput"); 


const initTodo = (todo) => {
         todo = {
            text : todoInput.value,
            isCompleted : false,
            id : Math.floor((Math.random() * 100) + 1),  
        };

    todoStore.forEach(element => {
        if(element.id == todo.id){
            todo.id = Math.floor((Math.random() * 100) + 1);
        }
    });
    todoStore.push(todo);
    let todosArray = JSON.parse(localStorage.getItem('todos'));
    todosArray.push(todo);
    localStorage.setItem('todos', JSON.stringify(todosArray));

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
    editFunc(createEditBtn)
    
}

todoInput.addEventListener('keypress', (event) => {
    if ( event.code == "Enter") {

        if( todoInput.value.trim().length){
            initTodo();

    //     const todo = {
    //         text : todoInput.value,
    //         isCompleted : false,
    //         id : Math.floor((Math.random() * 100) + 1),  
    //     };

    //     todoStore.forEach(element => {
    //         if(element.id == todo.id){
    //             todo.id = Math.floor((Math.random() * 100) + 1);
    //         }
    //     });
    //     todoStore.push(todo);
        
    //     const todoContainer = document.getElementById('todo-container')
    //     let createTodo = document.createElement('div');
    //     createTodo.textContent = todo.text; 
    //     createTodo.classList.add('todo-text');
        
    //     let container = document.getElementById('todo-container');
    //     let createList = document.createElement('div');
    //     createList.classList.add('todo-list');
    //     createList.setAttribute('data-id', todo.id);
        
    //     let createDelBtn = document.createElement('button');
    //     let createEditBtn = document.createElement('button');
    //     let createEditInp = document.createElement('input');
    //     createDelBtn.textContent = 'Delete';
    //     createEditBtn.textContent= 'Edit';
    //     createDelBtn.classList.add('delete-btn');
    //     createEditBtn.classList.add('edit-btn');
    //     createEditInp.classList.add('edit-input');
        
    //     createList.appendChild(createTodo);
    //     createList.appendChild(createEditInp);
    //     createList.appendChild(createEditBtn);
    //     createList.appendChild(createDelBtn);
    //     container.appendChild(createList);
        
    //     todoInput.value = '';

    //     createTodo.addEventListener('click', () => {
    //         todoStore.forEach(Element => {
    //             if(Element.id == createTodo.parentElement.dataset.id){
    //                 if(Element.isCompleted){
    //                     Element.isCompleted = false;
    //                     createTodo.classList.remove('complatedTask');
    //                 } else {
    //                     Element.isCompleted = true;
    //                     createTodo.classList.add('complatedTask');
    //                 }
    //             }
    //         });
    //     })
    //     deleteFunc(createDelBtn);
    //     editFunc(createEditBtn)
     }
     else{
        alert('Cannot be empty');
     }
    }
} )
