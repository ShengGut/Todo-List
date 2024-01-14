import {format, addDays} from 'date-fns';
let todoIdCounter = 0;

export default function createTodoItem(description, priority, dueDate, status) {
  const currentDate = new Date();
  const formattedDueDate = format(currentDate, 'yyyy-MM-dd');
    return {
      id: ++todoIdCounter,
      description: description || 'No description',
      priority: priority || 'low',
      dueDate: dueDate || formattedDueDate,
      status: "Incomplete"
  };
}
