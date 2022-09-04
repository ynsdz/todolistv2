const deleteFunc = (button) => {
    button.addEventListener('click', function(){
        button.parentElement.remove();
    })
}

const editFunc = (button, todo, list) => {
    button.addEventListener('click', function(){
        if(button.textContent.toLowerCase()=='edit'){

            let tempTodo = todo;
            for(let i = 0; i<button.parentElement.children.length;i++ ){
                if(button.parentElement.children[i].classList == 'todo-text complatedTask'){
                    button.parentElement.children[i].remove();
                }
                if(button.parentElement.children[i].classList=='todo-text' ){
                    button.parentElement.children[i].remove();
                }
            }

            let editInput = document.createElement('input');
            editInput.classList.add('edit-input');
            editInput.type = 'text';
            editInput.value = tempTodo.text;
            list.appendChild(editInput);
            button.textContent = 'Save';
        }
            
            else{

                    let tempTodo = todo;
                    editInput = button.parentElement.children[2] ;
                    tempTodo.text = editInput.value;
                    button.parentElement.children[2].remove();
                    let createTodo = document.createElement('li');
                    createTodo.textContent = tempTodo.text;
                    createTodo.classList.add('todo-text');
                    
                    if (tempTodo.isComplated){
                        // console.log(createTodo)
                        // createTodo.classList.add('complatedTask');
                    }
                    list.appendChild(createTodo);
                    button.textContent = 'Edit';
                    }
            })
        }
