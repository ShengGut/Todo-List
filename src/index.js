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
import switchProject from './switchProject.js';


document.querySelector('.new-list').addEventListener('click', function() {
    handleNewProject();
    activeProject = switchProject(defaultProject); // Update activeProject so that todos can be delated in the actively-selected project
    handleTodoFormInput(activeProject);
    deleteTodo(activeProject);
});

const defaultProject = createProjectList("Default");
const project2 = createProjectList("Project 2");
let activeProject = defaultProject;

switchProject(defaultProject);

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

createDOMTodo(t1);
createDOMTodo(t2);
createDOMTodo(t3);


handleTodoFormInput(activeProject);
deleteTodo(activeProject);