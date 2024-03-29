export function changeDescription(todoItem, newDescription) {
    if (typeof todoItem !== "object" || todoItem === null)
        throw new Error("Invalid todoItem. An object is expected.");

    todoItem.description = newDescription;
}

export function changeDueDate(todoItem, newDueDate) {
    if (typeof todoItem !== "object" || todoItem === null)
        throw new Error("Invalid todoItem. An object is expected.");

    todoItem.dueDate = newDueDate;
}


export function changePriority(todoItem, newPriority) {
    if (typeof todoItem !== "object" || todoItem === null)
        throw new Error("Invalid todoItem. An object is expected.");

    todoItem.priority = newPriority;
}

export function changeStatus(todoItem) {
    if (typeof todoItem !== "object" || todoItem === null)
        throw new Error("Invalid todoItem. An object is expected.");

    todoItem.status = todoItem.status === "completed" ? "incomplete": "completed";
}