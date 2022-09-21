function dragdrop(){

    const draggables = document.querySelectorAll('.todo-list')
    const containers = document.querySelectorAll('.todo-container')

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging')
        })
        
    draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging')
           
            const localArray = JSON.parse(localStorage.getItem('todos'));
            const domIndex = document.getElementById('todo-container').children;
            let domArray = [];
            
            for (const element of domIndex){
                domArray.push(Number(element.attributes[1].value));
            };
            const sortLocal = (array, sortArray) => {
                return array.sort(
                  (a, b) => sortArray.indexOf(a.id) - sortArray.indexOf(b.id)
                )
              }
            sortLocal(localArray, domArray);
            localStorage.setItem('todos', JSON.stringify(localArray));
        })
    })
    
    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault()
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.dragging')
            if (afterElement == null) {
                container.appendChild(draggable)
            } else {
                container.insertBefore(draggable, afterElement)
            }
            

            // let gecici = localArray[1];
            // console.log(localArray)
            // let test = []
            // for( const element of localArray){
            //     test.push(element.id);
            // }
            // console.log(test)
            
            // test.sort(function (a, b){  
            //     return deneme.indexOf(a) - deneme.indexOf(b);
            //   });

        });
    });
    
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.todo-list:not(.dragging)')];
        
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element
    }
}