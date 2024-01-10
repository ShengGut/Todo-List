import './style.css';
import { compareAsc, format } from "date-fns";
import createTodoItem from './createTodoItem.js';
import createProjectList from './createProjectList.js';
import * as changeToDoItemModule from './changeToDoItem.js';
import toggleCompletion from './toggleCompletion.js';

const todoOne = createTodoItem("Write 1k words", "01-30-2024", "medium");
const todoTwo = createTodoItem();
const p1 = createProjectList();


p1.addTodoItems(todoOne)
p1.addTodoItems(todoTwo)
console.log(p1.getTodoItems())

changeToDoItemModule.changeDescription(todoTwo, "Run around the neighborhood for 30 mins");
changeToDoItemModule.changeDueDate(todoTwo, "2024-01-01");
changeToDoItemModule.changePriority(todoTwo, "High");
changeToDoItemModule.changeStatus(todoTwo);
console.log(p1.getTodoItems())
// p1.deleteTodoItem(2);
// console.log(p1.getTodoItems())

toggleCompletion(p1);