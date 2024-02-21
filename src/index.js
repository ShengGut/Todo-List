import './style.css';
import { compareAsc, format } from "date-fns";
import createTodoItem from './createTodoItem.js';
import createProjectList from './createProjectList.js';
import * as changeToDoItemModule from './changeToDoItem.js';
import toggleCompletion from './toggleCompletion.js';
import createDOMTodo from './createDOMTodo.js';
import handleTodoFormInput from './todoFormHandler.js';
import deleteTodo from './deleteTodoItem.js';
import handleNewProject from './newProjectHandler.js';

const defaultProject = createProjectList("Default");
const project2 = createProjectList("Project 2");
let activeProject = defaultProject;

const projectLists = [];
projectLists.push(defaultProject);
projectLists.push(project2);

// Event listener for project titles
document.querySelectorAll('.project-title').forEach(element => {
    element.addEventListener('click', function() {
        const projectName = element.textContent; // Get the clicked project name
        const clickedProject = projectLists.find(project => project.projectName === projectName); // Find the project in the array

        // Change activeProject based on the clicked project
        if (clickedProject) {
            activeProject = clickedProject;
            handleTodoFormInput(activeProject);
            console.log(`Now project ${activeProject.projectName}`);
            console.log(activeProject.getTodoItems());
            // Clear DOM elements for mainContainer
            const mainContainer = document.querySelector('.main-container');
            mainContainer.innerHTML = "";

            // Load todo elements for the new active project
            activeProject.getTodoItems().forEach(todoItem => {
                createDOMTodo(todoItem);
            });
        }
    });
});


toggleCompletion();

const t1 = createTodoItem("Go on a hike", "medium");
const t2 = createTodoItem("Go on a run", "medium");
const t3 = createTodoItem("Go swim", "medium");

defaultProject.addTodoItems(t1);
defaultProject.addTodoItems(t2);
defaultProject.addTodoItems(t3);

const p1 = createTodoItem("Study math", "medium");
const p2 = createTodoItem("Study history", "medium");
const p3 = createTodoItem("Study CS", "medium");

project2.addTodoItems(p1);
project2.addTodoItems(p2);
project2.addTodoItems(p3);


createDOMTodo(t1); // creates DOM elements for tasks 1-3 in mainContainer for the current defaultProject
createDOMTodo(t2);
createDOMTodo(t3);

// console.log(defaultProject);
// console.log(defaultProject.getTodoItems());

// console.log(project2);
// console.log(project2.getTodoItems());
handleTodoFormInput(activeProject);
deleteTodo(activeProject);

document.querySelector('.new-list').addEventListener('click', function() {
    handleNewProject();
});





function removeTodoFormInputListener() {
    let todoInputElement = document.querySelector('.create-todo');
    todoInputElement.removeEventListener('change', handleTodoInputChange);
}
