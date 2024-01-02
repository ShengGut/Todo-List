import './style.css';
import { compareAsc, format } from "date-fns";
import createTodoItem from './createTodoItem.js';
import createProjectList from './createProjectList.js';
import changeTodoItem from './changeToDoItem.js';

const todoOne = createTodoItem("Finish short story", "Write 1k words", "01-30-2024", "medium");
const todoTwo = createTodoItem();
const p1 = createProjectList();


p1.addTodoItems(todoOne)
p1.addTodoItems(todoTwo)
console.log(p1.getTodoItems())

changeTodoItem(todoTwo, {title: "Get Driver License", description: "need it", dueDate: "01-01-2024", priority: "high", status: "Complete"})

