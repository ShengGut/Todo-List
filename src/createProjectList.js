import projectManager from './projectManager.js';

export default function createProjectList(projectName) {
    const todoItems = [];
    const project = {
        projectName: projectName,
        todoItems: todoItems,
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

    // Add the newly created project to the project manager's list
    projectManager.addProjectToList(project);
    console.log(`New project created: ${project.projectName}`);
    return project;
}
