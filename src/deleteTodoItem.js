export default function deleteTodo() {
    document.addEventListener('DOMContentLoaded', function() {
        const mainContainer = document.querySelector('.main-container');
        mainContainer.addEventListener('click', function(event) {

            if (event.target.tagName === 'DELETEBTN') { // tagname returns element tag name in uppercase

                const todoItem = event.target.closest('.todo-item');
                if (todoItem) {
                    const todoItemId = todoItem.getAttribute('data-id');
                    deleteTodoItem(todoItemId);
                }
            }
        });
    });
}

function deleteTodoItem(todoItemId) {
    const todoItem = document.querySelector(`.todo-item[data-id="${todoItemId}"]`);
    if (todoItem) 
        todoItem.remove();
    
}