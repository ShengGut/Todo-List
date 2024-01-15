import './style.css';
import { compareAsc, format } from "date-fns";
import createTodoItem from './createTodoItem.js';
import createProjectList from './createProjectList.js';
import * as changeToDoItemModule from './changeToDoItem.js';
import toggleCompletion from './toggleCompletion.js';
import createDOMTodo from './createDOMTodo.js';
import handleTodoFormInput from './todoFormHandler.js';
import deleteTodo from './deleteTodoItem.js';

const p1 = createProjectList();

toggleCompletion();

const t1 = createTodoItem("Go on a hike", "medium");
const t2 = createTodoItem("Go on a run", "medium");
const t3 = createTodoItem("Go swim", "medium");

createDOMTodo(t1);
createDOMTodo(t2);
createDOMTodo(t3);

p1.addTodoItems(t1);
p1.addTodoItems(t2);
p1.addTodoItems(t3);

console.log(p1.getTodoItems());
console.log(p1);

const todoInputElement = document.querySelector('.create-todo');

handleTodoFormInput(todoInputElement, p1);
deleteTodo();