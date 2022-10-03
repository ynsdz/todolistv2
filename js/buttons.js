const deleteFunc = (button) => {
  const handleClick = function () {
    let todosArray = JSON.parse(localStorage.getItem("todos"));
    const todoId = +button.dataset.todoId;

    const todoIndex = todosArray.findIndex((todo) => todo.id === todoId);
    todosArray.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todosArray));
    button.parentElement.remove();
  };

  button.addEventListener("click", handleClick);
};

const editFunc = (button) => {
  button.addEventListener("click", function () {
    const todos = JSON.parse(localStorage.getItem("todos"));

    const todo = todos.find((todo) => todo.id == button.dataset.todoId);
    if (!todo) return;

    const modal = new Modal(todo);
    modal.render();
  });
};