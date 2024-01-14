export default function createDOMTodo(todo) {
    const mainContainer = document.querySelector(".main-container");

    const todoElement = document.createElement('div');
    todoElement.className = 'todo-item';
    todoElement.setAttribute('data-id', todo.id);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList = 'dot-checkmark';

    const itemContent = document.createElement('div');
    itemContent.className = 'item-content';

    const descriptionElement = document.createElement('description');
    descriptionElement.textContent = todo.description;

    const nestedDiv = document.createElement('div');
    nestedDiv.className = 'nested';

    const priorityElement = document.createElement('priority');
    priorityElement.textContent = capitalizeFirstLetter(todo.priority);
    const dueDateElement = document.createElement('dueDate');
    dueDateElement.textContent = todo.dueDate;

    const separator = document.createTextNode(' ');
    nestedDiv.appendChild(priorityElement);
    nestedDiv.appendChild(separator); // Need this to create spacing between priorityElement and dueDate when rendered
    nestedDiv.appendChild(dueDateElement);

    itemContent.appendChild(descriptionElement);
    itemContent.appendChild(nestedDiv);
    todoElement.appendChild(checkbox);
    todoElement.appendChild(itemContent);

    mainContainer.appendChild(todoElement);
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}