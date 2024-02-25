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

const loadedProjectManager = loadProjectManager();

projectManager.projectLists.forEach(project => {
    addProjectFunctionsBack(project, projectManager);
});

loadProjectFromLocal();
loadDOMData();

let defaultProject = loadedProjectManager ? loadedProjectManager.projectLists[0] : createProjectList("Default");

let activeProject = defaultProject;
document.addEventListener("DOMContentLoaded", function () {
    //loadDOMData();
   console.log("Todo saved:", getTodoFromLocal());
   console.log("Todo Id saved:", getTodoIdFromLocal());
   console.log("Default project:", defaultProject);
   // console.log("Project loaded:", loadProjectFromLocal());
   console.log("Project Manager inner var:", projectManager);
     switchProject(defaultProject);
//     toggleCompletion(activeProject);
//    handleTodoFormInput(activeProject);
//     deleteTodo(activeProject);
    document.querySelector('.new-list').addEventListener('click', function() {
        handleNewProject();
        activeProject = switchProject(defaultProject); // Update activeProject so that todos can be deleted in the actively-selected project
        handleTodoFormInput(activeProject);
        deleteTodo(activeProject);
    });
});
//switchProject(defaultProject);
toggleCompletion(activeProject);

handleTodoFormInput(activeProject);
deleteTodo(activeProject);
