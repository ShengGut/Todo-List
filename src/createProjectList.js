export default function createProjectList() {
    const todoItems = [];
    
    return { 
        getTodoItems: () => [...todoItems],
        addTodoItems: (todoItem) => todoItems.push(todoItem)
    };
}