import createTodoItem from "./createTodoItem";
import createDOMTodo from "./createDOMTodo";

let todoInputEventListener = null;

export default function handleTodoFormInput(activeProject) {
    
    console.log(`Handler start: ${activeProject.projectName}`);
    
    let todoInputElement = document.querySelector('.create-todo');

    // Check if an event listener already exists, and if it does, remove it. This is needed for when activeProject is changed.
    if (todoInputEventListener) {
        todoInputElement.removeEventListener('change', todoInputEventListener);
    }

    todoInputEventListener = function () {
        const inputValue = todoInputElement.value;

        if (inputValue.trim() !== '') {
            const newTodoItem = createTodoItem(inputValue);

            createDOMTodo(newTodoItem);
            console.log(`Create new todo item: ${newTodoItem.description}, ${newTodoItem.id}, ${newTodoItem.priority} for Project: ${activeProject.projectName}`);
            activeProject.addTodoItems(newTodoItem);
            
            console.log(activeProject.getTodoItems());
            todoInputElement.value = '';
        }
    };

    todoInputElement.addEventListener('change', todoInputEventListener);
}
