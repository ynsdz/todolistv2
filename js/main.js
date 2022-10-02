window.addEventListener("load", (Event) => {
  const todoBttn = document.getElementById("todoButton");
  let todoInput = document.getElementById("todoInput");
  let todosArray = JSON.parse(localStorage.getItem("todos"));
  if (!todosArray) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    todosArray.forEach((element) => {
      initTodo(element);
    });
  }
});

const pushTodo = () => {
  const todo = {
    text: todoInput.value,
    isCompleted: false,
    id: Math.floor(Math.random() * 100 + 1),
    description: " ",
  };
  let todosArray = JSON.parse(localStorage.getItem("todos"));

  todosArray.forEach((element) => {
    if (element.id == todo.id) {
      todo.id = Math.floor(Math.random() * 100 + 1);
    }
  });

  todosArray.push(todo);
  localStorage.setItem("todos", JSON.stringify(todosArray));

  initTodo(todo);
};

const initTodo = (todo) => {
  const todoContainer = document.getElementById("todo-container");
  let createTodo = document.createElement("div");
  createTodo.textContent = todo.text;
  createTodo.classList.add("todo-text");

  let container = document.getElementById("todo-container");
  let createList = document.createElement("div");
  createList.classList.add("todo-list");
  createList.setAttribute("data-id", todo.id);

  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  const editInput = document.createElement("input");
  const dndIcon = document.createElement("i");

  deleteButton.textContent = "Delete";
  editButton.textContent = "Edit";

  // todo.id yi buttonun datasetine ekliyoruz. bu sayede butona tiklandiginda alabilecgiz.
  editButton.dataset.todoId = todo.id;
  deleteButton.dataset.todoId = todo.id;

  dndIcon.classList.add("fas", "fa-grip-lines", "grabItem");
  //<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
  dndIcon.setAttribute("draggable", true);
  deleteButton.classList.add("delete-btn");
  editButton.classList.add("edit-btn");
  editInput.classList.add("edit-input");

  createList.appendChild(dndIcon);
  createList.appendChild(createTodo);
  createList.appendChild(editInput);
  createList.appendChild(editButton);
  createList.appendChild(deleteButton);
  container.appendChild(createList);

  todoInput.value = "";

  if (todo.isCompleted) {
    createTodo.classList.add("complatedTask");
  }

  createTodo.addEventListener("click", () => {
    let todosArray = JSON.parse(localStorage.getItem("todos"));
    todosArray.forEach((Element) => {
      if (Element.id == createTodo.parentElement.dataset.id) {
        if (Element.isCompleted) {
          Element.isCompleted = false;
          createTodo.classList.remove("complatedTask");
          localStorage.setItem("todos", JSON.stringify(todosArray));
        } else {
          Element.isCompleted = true;
          createTodo.classList.add("complatedTask");
          localStorage.setItem("todos", JSON.stringify(todosArray));
        }
      }
    });
  });
  deleteFunc(deleteButton);
  editFunc(editButton);
  dragdrop();
};

todoInput.addEventListener("keypress", (event) => {
  if (event.code == "Enter") {
    if (todoInput.value.trim().length) {
      pushTodo();
    } else {
      alert("Cannot be empty");
    }
  }
});
