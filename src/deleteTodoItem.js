import { saveDOMData, saveProjectToLocal } from "./handleLocalStorage";

export default function deleteTodo(activeProject) {
    document.addEventListener('DOMContentLoaded', function() {
        const mainContainer = document.querySelector('.main-container');
        mainContainer.addEventListener('click', function(event) {

            if (event.target.tagName === 'DELETEBTN') { // tagname returns element tag name in uppercase

                const todoItem = event.target.closest('.todo-item');
                if (todoItem) {
                    const todoItemId = todoItem.getAttribute('data-id');
                    const todoItemName = todoItem.querySelector('description').textContent;
                    activeProject.deleteTodoItem(parseInt(todoItemId)); // logically removes from array
                    saveProjectToLocal(activeProject);
                    deleteTodoItemDOM(todoItemId); // removes from DOM
                    saveDOMData();
                    console.log(`Todo Item deleted: ${todoItemName}`)
                }
            }
        });
    });
}

function deleteTodoItemDOM(todoItemId) {
    const todoItem = document.querySelector(`.todo-item[data-id="${todoItemId}"]`);
    if (todoItem) 
        todoItem.remove();
    
}