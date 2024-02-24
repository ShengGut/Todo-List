import { isString } from 'antd/es/button';
import {format, addDays} from 'date-fns';
import { getTodoIdFromLocal } from './handleLocalStorage';

let todoIdCounter = getTodoIdFromLocal() !== null ? getTodoIdFromLocal() : 0;

export default function createTodoItem(description, priority, dueDate, status) {
    const currentDate = new Date();
    const formattedDueDate = format(currentDate, 'yyyy-MM-dd');
    const nextId = ++todoIdCounter;
    return {
        id: nextId,
        description: description || 'No description',
        priority: priority || 'low',
        dueDate: dueDate || formattedDueDate,
        status: status || "Incomplete"
    };
}

