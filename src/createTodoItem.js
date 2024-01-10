let todoIdCounter = 0;

export default function createTodoItem(description, dueDate, priority, status) {

    return {
      id: ++todoIdCounter,
      description: description || 'No description',
      dueDate: dueDate || null,
      priority: priority || 'low',
      status: "Incomplete"
  };
}
