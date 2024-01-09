    export default function createProjectList(projectName = "default") {
        const todoItems = [];
        
        return {
            projectName: projectName,
            getTodoItems: () => [...todoItems],
            addTodoItems: (todoItem) => todoItems.push(todoItem),
            deleteTodoItem: (todoId) => {
                const indexToDelete = todoItems.findIndex(todo => todo.id === todoId);

                if (indexToDelete !== -1) {
                  todoItems.splice(indexToDelete, 1);
                } else {
                  console.warn(`Todo with ID ${todoId} not found.`);
                }
            },
        };
    }