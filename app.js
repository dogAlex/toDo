//Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo");


function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    });
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    });
}


//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', DeleteCheck)
filterOption.addEventListener("click", filterTodo);


//Functions

function addTodo(event) {
    event.preventDefault()
        //create Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
        //create Li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
        //Check Mark Button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
        //Check delete button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)


    //append to list
    todoList.appendChild(todoDiv)

    //clear input value
    todoInput.value = ''

}

function DeleteCheck(e) {
    const item = e.target
        //delete Todo
    if (item.classList[0] === 'trash-btn') {
        // item.remove()
        const todo = item.parentElement
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function() {
            todo.remove()
        })
    }
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }

}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    });
}