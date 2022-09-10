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

const editFunc = (button) => {
    button.addEventListener('click', function(){
        todoStore.forEach(element => {
            if(element.id == button.parentElement.dataset.id){
                if(button.textContent.toLowerCase()=='edit'){
                    button.parentElement.children[0].style.display = 'none';
                    button.parentElement.children[1].style.display = 'flex';
                    button.parentElement.children[1].value = element.text;
                    button.parentElement.children[1].focus();
                    button.classList.add('save-btn');
                    button.textContent = 'Save';
            
                 }else{
                    button.parentElement.children[1].style.display = 'none';
                    button.parentElement.children[0].style.display = 'flex';
                    element.text = button.parentElement.children[1].value;
                    button.parentElement.children[0].innerHTML = element.text;
                    button.classList.remove('save-btn');
                    button.textContent = 'Edit';
        }
            }
        })
    })
}        
