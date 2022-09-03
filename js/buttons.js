const deleteFunc = (button) => {
    button.addEventListener('click', function(){
        button.parentElement.remove();
    })
}

