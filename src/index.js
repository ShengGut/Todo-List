import './style.css';
import { compareAsc, format } from "date-fns";
import createTodoItem from './createTodoItem.js';
import createProjectList from './createProjectList.js';
import * as changeToDoItemModule from './changeToDoItem.js';
import toggleCompletion from './toggleCompletion.js';
import createDOMTodo from './createDOMTodo.js';
import handleTodoFormInput from './todoFormHandler.js';

const p1 = createProjectList();

// const todoOne = createTodoItem("Write 1k words", "01-30-2024", "medium");
// const todoTwo = createTodoItem();



// p1.addTodoItems(todoOne)
// p1.addTodoItems(todoTwo)
// console.log(p1.getTodoItems())

// changeToDoItemModule.changeDescription(todoTwo, "Run around the neighborhood for 30 mins");
// changeToDoItemModule.changeDueDate(todoTwo, "2024-01-01");
// changeToDoItemModule.changePriority(todoTwo, "High");
// changeToDoItemModule.changeStatus(todoTwo);

// p1.deleteTodoItem(2);
// console.log(p1.getTodoItems())
toggleCompletion(p1)

const t1 = createTodoItem("Go on a hike", "medium");
const t2 = createTodoItem("Go on a run", "medium");
const t3 = createTodoItem("Go swim",  "medium");

createDOMTodo(t1);
createDOMTodo(t2);
createDOMTodo(t3);

p1.addTodoItems(t1);
p1.addTodoItems(t2);
p1.addTodoItems(t3);

console.log(t1);
console.log(t2);
console.log(t3);
console.log(p1.getTodoItems());

const todoInputElement = document.querySelector('.create-todo');

handleTodoFormInput(todoInputElement);
