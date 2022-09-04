const deleteFunc = (button) => {
    button.addEventListener('click', function(){
        button.parentElement.remove();
    })
}

const editFunc = (button, todo, list) => {
    button.addEventListener('click', function(){
        // button.parentElement.remove();
        // todoInput.value = todo.text;
        // todoInput.focus();
        if(button.textContent.toLowerCase()=='edit'){

            let tempTodo = todo;
            // console.log(button.parentElement);
            for(let i = 0; i<button.parentElement.children.length;i++ ){
                if(button.parentElement.children[i].classList=='todo-text'){
                    // console.log(button.parentElement.children[i]);
                    button.parentElement.children[i].remove();
                    // button.textContent = 'Save';
                }
            }
            // button.parentElement.children[0].remove();

            let editInput = document.createElement('input');
            editInput.classList.add('edit-input');
            editInput.type = 'text';
            editInput.value = tempTodo.text;
            list.appendChild(editInput);
            button.textContent = 'Save';
        }
            
        // if(button.textContent.toLowerCase()=='save'){
            else{

                // button.addEventListener('click', function(){
                    let tempTodo = todo;
                    console.log('yunus')
                    editInput = button.parentElement.children[2] ;
                    console.log(editInput)
                    tempTodo.text = editInput.value;
                    editInput.focus();
                    button.parentElement.children[2].remove();
                    let createTodo = document.createElement('li');
                    createTodo.textContent = tempTodo.text;
                    createTodo.classList.add('todo-text');
                    
                    if (tempTodo.isComplated){
                        createTodo.classList.add('complatedTask');
                    }
                    list.appendChild(createTodo);
                    button.textContent = 'Edit';
                    
                    // })
                }
            })
        }
