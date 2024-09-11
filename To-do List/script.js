// Selecting elements
let container = document.getElementById("to-do-container");
let input = document.getElementById("input");
let addbtn = document.getElementById("Add");
let todoList = document.querySelector("ul");

// Initialize todos from localStorage or as an empty array
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Render existing todos from localStorage when the page loads
window.onload = renderTodos;

// Add event listener for add button
addbtn.addEventListener("click", addToLocalStorage);

// Function to add a task to localStorage and render it
function addToLocalStorage() {
    const newTodo = input.value; // Get input value and remove extra spaces
    if (newTodo) {
        todos.push(newTodo); // Add new todo to array
        saveTodos(); // Save updated list to localStorage
        renderTodos(); // Render the updated list
        input.value = ''; // Clear input field after adding
    } else {
        alert('Please enter a task!'); // Show an error if input is empty
    }
}

// Function to delete a specific todo
function deleteTodo(index) {
    todos.splice(index, 1); // Remove the todo at the given index
    saveTodos(); // Save the updated list to localStorage
    renderTodos(); // Re-render the list
}

// Function to save the todos array to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to render the todos to the DOM
function renderTodos() {
    todoList.innerHTML = ''; // Clear the current list
    todos.forEach((todo, index) => {
        let li = document.createElement('li');
        li.innerHTML = `${todo} <button onclick="deleteTodo(${index})">Delete</button>`;
        todoList.appendChild(li);
    });
}
