import createTodoItem from "./createTodoItem";
import createDOMTodo from "./createDOMTodo";

export default function handleTodoFormInput(inputElement, project) {
    inputElement.addEventListener('change', function () {
        const inputValue = inputElement.value;

        if (inputValue.trim() !== '') {
            const newTodoItem = createTodoItem(inputValue);

            createDOMTodo(newTodoItem);
            console.log(`Create new todo item: ${newTodoItem.description}, ${newTodoItem.id}, ${newTodoItem.priority}`);
            project.addTodoItems(newTodoItem);
            
            console.log(project);
            inputElement.value = '';
        }
    });
}
