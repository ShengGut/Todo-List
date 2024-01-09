import './style.css';
import { compareAsc, format } from "date-fns";
import createTodoItem from './createTodoItem.js';
import createProjectList from './createProjectList.js';
import * as changeToDoItemModule from './changeToDoItem.js';


const todoOne = createTodoItem("Finish short story", "Write 1k words", "01-30-2024", "medium");
const todoTwo = createTodoItem();
const p1 = createProjectList();


p1.addTodoItems(todoOne)
p1.addTodoItems(todoTwo)
console.log(p1.getTodoItems())

changeToDoItemModule.changeTitle(todoTwo, "Test asdstitle");
p1.deleteTodoItem(2);
console.log(p1.getTodoItems())