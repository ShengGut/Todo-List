import projectManager from './projectManager.js';
import { saveProjectManager } from './projectManager.js';
export default function createProjectList(projectName) {
    const todoItems = [];
    const project = {
        projectName: projectName,
        todoItems: todoItems,
        getTodoItems: () => [...todoItems],
        addTodoItems: (todoItem) => todoItems.push(todoItem),
        deleteTodoItem: (todoId) => {
            projectManager.deleteTodoItemFromAllProjects(todoId);
        },
    };

    // Add the newly created project to the project manager's list
    projectManager.addProjectToList(project);
    saveProjectManager(projectManager);
    console.log(`New project created: ${project.projectName}`);
    return project;
}
