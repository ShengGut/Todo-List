import './style.css';

import {createTodoItem} from './createTodoItem.js';
import createProjectList from './createProjectList.js';
import * as changeToDoItemModule from './changeToDoItem.js';
import toggleCompletion from './toggleCompletion.js';
import createDOMTodo from './createDOMTodo.js';
import handleTodoFormInput from './todoFormHandler.js';
import deleteTodo from './deleteTodoItem.js';
import handleNewProject from './newProjectHandler.js';
import switchProject from './switchProject.js';
import projectManager from './projectManager.js';
import { getTodoFromLocal, getTodoIdFromLocal, loadProjectFromLocal, addProjectFunctionsBack, loadDOMData } from './handleLocalStorage.js';
import { loadProjectManager } from './projectManager.js';

// let loadedProjectManager = loadProjectManager() ? loadProjectManager() : projectManager;

// loadedProjectManager.projectLists.forEach(project => {
//     addProjectFunctionsBack(project, loadedProjectManager);
// });
//checking original state of projectManager
projectManager.projectLists.forEach(project => {
    addProjectFunctionsBack(project, projectManager);
});

loadProjectFromLocal();
loadDOMData();

let defaultProject = projectManager ? 
projectManager.projectLists.find(project => project.projectName === "Default") || createProjectList("Default") :
    createProjectList("Default");

let activeProject = defaultProject;

document.addEventListener("DOMContentLoaded", function () {
    //loadDOMData();
   console.log("Todo saved:", getTodoFromLocal());
   console.log("Todo Id saved:", getTodoIdFromLocal());
   console.log("Default project:", defaultProject);
   console.log("activeProject project:", activeProject);
   // console.log("Project loaded:", loadProjectFromLocal());
   console.log("Project Manager var:", projectManager);
   console.log("Project Manager value:", projectManager);
     activeProject = switchProject(defaultProject, projectManager);
     toggleCompletion(activeProject);
     handleTodoFormInput(activeProject);
     deleteTodo(activeProject);
    document.querySelector('.new-list').addEventListener('click', function() {
        handleNewProject();
        activeProject = switchProject(defaultProject, projectManager); // Update activeProject so that todos can be deleted in the actively-selected project
        handleTodoFormInput(activeProject);
        deleteTodo(activeProject);
    });
});
//activeProject = switchProject(defaultProject, loadedProjectManager);
toggleCompletion(activeProject);

handleTodoFormInput(activeProject);
deleteTodo(activeProject);
