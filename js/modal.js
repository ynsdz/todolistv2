class Modal {
  constructor(todo) {
    this.todo = todo;
    // this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    document.getElementById("todo-modal")?.remove();
  }
  handleEditButton() {
    this.setDisplay("todo-description-text", false);
    this.setDisplay("todo-description-input", true);
    this.setDisplay("todo-input-buttons", true);
    document.getElementById("modal-edit-button").style.display = "none";
  }

  setDisplay(elementId, show) {
    document.getElementById(elementId).style.display = show ? "block" : "none";
  }

  handleCancelButton() {
    this.setDisplay("todo-description-text", true);
    this.setDisplay("todo-description-input", false);
    this.setDisplay("todo-input-buttons", false);
    document.getElementById("modal-edit-button").style.display = "inline-block";
  }

  handleSaveButton() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const descriptionInput = document.getElementById(
      "todo-description-input"
    ).value;
    const descriptionText = document.getElementById("todo-description-text");
    this.todo.description = descriptionInput;
    const editedTodoIndex = todos.findIndex((todo) => {
      return todo.id == this.todo.id;
    });
    todos[editedTodoIndex] = this.todo;
    localStorage.setItem("todos", JSON.stringify(todos));
    descriptionText.innerHTML = this.todo.description;

    this.handleCancelButton();
  }

  handleEditTodo(event) {
    const modalTodoText = document.getElementById("modal-todo-text");
    const todos = JSON.parse(localStorage.getItem("todos"));
    const editedTodoIndex = todos.findIndex((todo) => todo.id === this.todo.id);
    if (modalTodoText.value.trim().length) {
      this.todo.text = modalTodoText.value;
      todos[editedTodoIndex] = this.todo;
      localStorage.setItem("todos", JSON.stringify(todos));
      const yunus = [...document.getElementById("todo-container").children];
      const change = yunus.findIndex((todo) => {
        return Number(todo.attributes["data-id"].value) === this.todo.id;
      });
      yunus[change].children[1].innerHTML = this.todo.text;
    }
  }

  render() {
    document.addEventListener("click", (event) => {
      if (event.target.id === "modal-close-button") {
        this.closeModal();
      }
      if (event.target.id === "modal-edit-button") {
        this.handleEditButton();
      }
      if (event.target.id === "todo-input-save") {
        this.handleSaveButton();
      }
      if (event.target.id === "todo-input-cancel") {
        this.handleCancelButton();
      }
    });
    document.addEventListener("input", (event) => {
      if (event.target.id === "modal-todo-text") {
        this.handleEditTodo(event);
      }
    });

    const modalInner = `
        <div class="modal-inner">
            <header class="modal-header">
                <textarea id="modal-todo-text" class="modal-todo-text" >${this.todo.text}</textarea>
                <button id="modal-close-button" class="close-button">&times;</button>
            </header>
            <div class="modal-content">
                <div class="todo-description">
                    <div class="description-header">
                        <p>Aciklama</p>
                        <button id="modal-edit-button" class="button--text">Edit</button>
                    </div>
                    <div class="description-body">
                        <p id="todo-description-text" class="modal-text" onclick="">${this.todo.description}</p>
                        <textarea name="" id="todo-description-input" cols="30" rows="10">${this.todo.description}</textarea>
                    </div>
                    <div id="todo-input-buttons" class="description-footer">
                        <button id="todo-input-save" class="button--primary">Save</button>
                        <button id="todo-input-cancel" class="button--default">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const modal = document.createElement("div");
    modal.id = "todo-modal";
    modal.className = "modal";
    modal.innerHTML = modalInner;
    document.body.appendChild(modal);
  }
}
