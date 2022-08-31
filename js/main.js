const todoBttn = document.getElementById("todoButton");
let todoInput = document.getElementById("todoInput"); 
// let listItems = document.getElementById('todo-list');

todoBttn.addEventListener('click', ()=> {
    const todo = 
    {
        text : todoInput.value,
        isCompleted : false,
    }  
  
    const todoContainer = document.getElementById('todo-container')
    let createTodo = document.createElement('li');
    createTodo.textContent = todo.text; 
    createTodo.classList.add('todo-list')
    createTodo.setAttribute('isCompleted', todo.isCompleted);
    todoContainer.appendChild(createTodo)
    todoInput.value = '';
    
    createTodo.addEventListener('click',  (e)=>{
        // let result = condition ? value1 : value2;
        if(e.target.style.textDecoration == 'line-through'){
            e.target.style.textDecoration = 'none';
            e.target.style.opacity = 1;
            
        }else {
            e.target.style.textDecoration = 'line-through';
            e.target.style.opacity = 0.5;
        }

    })
})
// setInterval()
// const test = 
// listItems.addEventListener('click', (e)=>{
//     console.log(e.target)
// })


// let timerId = setTimeout(function tick() {
//     let listItems = document.getElementsByClassName('todo-list');
//     console.log(listItems)
//     listItems.addEventListener('click', (e)=>{
//     console.log(e.target)
//     })
//     timerId = setTimeout(tick, 150); // (*)
//   }, 200);

