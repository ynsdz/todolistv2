const deleteFunc = (button) => {
    button.addEventListener('click', function(){
        button.parentElement.remove();
    })
}

const editFunc = (button, todoText) => {
    button.addEventListener('click', function(){
        button.parentElement.remove();
        todoInput.value = todoText;
        todoInput.focus();
    })
}