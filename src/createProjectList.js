import projectManager from './projectManager.js';
import { saveProjectManager, loadProjectManager } from './projectManager.js';

export default function createProjectList(projectName) {

    const loadedProjectManager = loadProjectManager();

    // Check if loadedProjectManager has any project that has the same name
    if (loadedProjectManager && loadedProjectManager.projectLists.some(p => p.projectName === projectName)) {
        console.log(`Project with name '${projectName}' already exists.`);
        return null; // Return null to indicate that the project was not created
    }

    // If the project name is unique, proceed to create the project
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

