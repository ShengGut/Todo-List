import './style.css';
import { compareAsc, format } from "date-fns";
import createTodoItem from './createTodoItem.js';
import createProjectList from './createProjectList.js';

const todoOne = createTodoItem("Finish short story", "Write 1k words", "01-30-2024", "medium");
const todoTwo = createTodoItem();
const p1 = createProjectList();

console.log(p1)

console.log(p1.addTodoItems(todoOne))
console.log(p1.addTodoItems(todoTwo))
console.log(p1.getTodoItems())