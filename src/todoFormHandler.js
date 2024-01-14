import createTodoItem from "./createTodoItem";
import createDOMTodo from "./createDOMTodo";

export default function handleTodoFormInput(inputElement) {
    inputElement.addEventListener('change',function () {
        const inputValue = inputElement.value;

    if (inputValue.trim() !== '') {
        const newTodoItem = createTodoItem(inputValue);

        createDOMTodo(newTodoItem);

        inputElement.value = '';
    }
    });
}