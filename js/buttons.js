const deleteFunc = (button) => {
    button.addEventListener('click', function(){
        todoStore.forEach(element => {
            if(element.id == button.parentElement.dataset.id){
                todoStore.splice(todoStore.findIndex(x => x.id === element.id),1)
                button.parentElement.remove();
            }
        })
    })
}

const editFunc = (button, todoText, list) => {
    button.addEventListener('click', function(){
        console.log(todoStore);
            if(button.textContent.toLowerCase()=='edit'){
                let tempTodo = todoText;
                console.log(tempTodo)
                for(let i = 0; i<button.parentElement.children.length; i++){
                    if(button.parentElement.children[i].classList.contains('todo-text')){
                        button.parentElement.children[i].remove();
                    }}
                let editInput = document.createElement('input');
                editInput.classList.add('edit-input');
                editInput.type = 'text';
                editInput.value = tempTodo.text;
                list.appendChild(editInput);
                button.textContent = 'Save';
            }
            
            else{
                let tempTodo = todoText;
                editInput = button.parentElement.children[2] ;
                tempTodo.text = editInput.value;
                button.parentElement.children[2].remove();
                let createTodo = document.createElement('li');
                createTodo.textContent = tempTodo.text;
                createTodo.classList.add('todo-text');    
           
                    createTodo.addEventListener('click', () => {
                        if (createTodo.classList.contains('complatedTask')) {
                            tempTodo['isCompleted'] = false;
                            createTodo.classList.remove('complatedTask');
                            
                        }else {
                            tempTodo.isCompleted = true; 
                            createTodo.classList.add('complatedTask');
                        }
                    } )
                    
                    list.appendChild(createTodo);
                    button.textContent = 'Edit';
                }
            // }
            })
        }
        